const { Reader } = require('../models');

const router = require('express').Router();

router.get('/', (req, res) => {
  Reader.findAll({
    attributes: ['id', 'name'], 
  });

  res.send('Need home in views to render for later');
});

module.exports = router;