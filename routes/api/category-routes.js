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

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  const { id } = req.params
  // be sure to include its associated Products
  try{
    const category = await Category.findByPk(id, {
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

router.post('/', async (req, res) => {
  // create a new category
  try{
    const category = await Category.create(req.body)
    res.json(category)
  } catch(err) {
    res.status(500).send('Error creating category');
  };

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const { id } = req.params
  try {
    const category = await Category.update(req.body, {
      where: {
        id: id
      }
    })
    res.json(category)
  } catch(err) {
    res.status(500).send('Error updating category')
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const { id } = req.params
  try{  
    const category = await Category.destroy({ 
    where: { id }
    })
    res.json(category)
   } catch(err) {
    res.status(500).send('Error deleting category')
   }
});

module.exports = router;
