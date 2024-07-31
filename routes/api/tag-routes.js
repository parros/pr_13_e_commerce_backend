const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tags = await Tag.findAll({
      include: [
        { 
          model: Product
        }
      ]
    })
    res.json(tags)
  } catch(err) {
    console.log(err)
    res.status(500).send('Error getting all tags')
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const tag = Tag.findByPk(id, {
      include: [{ model: Product}]
    })
    res.json(tag)
  } catch(err) {
    console.log(err)
  }
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((tag) => {
    res.status(200).json(tag);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value

});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  let id = req.params.id
  Tag.destroy(req.body, { 
    where: { id }
   }).then((result) =>
  res.json(result))
});

module.exports = router;
