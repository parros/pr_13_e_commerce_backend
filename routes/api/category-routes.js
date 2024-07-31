const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const category = await Category.findAll({
      include: [
        { 
          model: Product
        }
      ]
    })
    res.json(category)
  } catch(err) {
    console.log(err)
  }

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const category = Category.findByPk(id, {
      include: [{ model: Product}]
    })
    res.json(category)
  } catch(err) {
    console.log(err)
  }
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
    .then((newCategory) => {
      res.json(newCategory)
    })

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  let id = req.params.id
  Category.update(req.body, { 
    where: { id }
   }).then((result) =>
  res.json(result))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  let id = req.params.id
  Category.destroy(req.body, { 
    where: { id }
   }).then((result) =>
  res.json(result))
});

module.exports = router;
