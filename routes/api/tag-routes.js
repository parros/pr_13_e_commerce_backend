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

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  const { id } = req.params
  // be sure to include its associated Product data
  try{
    const tag = await Tag.findByPk(id, {
      include: [
        { 
          model: Product
        }
      ]
    })
    res.json(tag)
  } catch(err) {
    console.log(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
    const tag = await Tag.create(req.body)
    res.json(tag)
  } catch(err) {
    res.status(500).send('Error creating tag');
  };
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const { id } = req.params
  try {
    const tag = await Tag.update(req.body, {
      where: {
        id: id
      }
    })
    res.json(tag)
  } catch(err) {
    res.status(500).send('Error updating tag')
  }

});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const { id } = req.params
  try{  
    const tag = await Tag.destroy({ 
    where: { id }
    })
    res.json(tag)
   } catch(err) {
    res.status(500).send('Error deleting tag')
   }
});

module.exports = router;
