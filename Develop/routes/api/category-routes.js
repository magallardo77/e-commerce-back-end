const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
 let categoryData = await Category.findAll({
  include: [{
    model: Product, 
  }]
 }
 )
 res.status(200).json(categoryData);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  let categoryData = await Category.findOne({
    where: {
      id: req.params.id
    },
    include: [{ model: Product, }]
   }
   )
   res.status(200).json(categoryData);
});

router.post('/', async (req, res) => {
  // create a new category
  await Category.create(req.body)
  res.status(200).json("Success!")
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  await Category.update(req.body,
    {
      where: {
      id: req.params.id,
      }
    })
  res.status(200).json("Success!")
});

router.delete('/:id', async (req, res) => {
  await Category.destroy(
    {
      where: {
      id: req.params.id,
      }
    })
  res.status(200).json("Success!")
  // delete a category by its `id` value
});

module.exports = router;
