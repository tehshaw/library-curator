const Sequelize = require('sequelize');
const { Book, Reader, Favorite } = require('../../models');
const router = require('express').Router();
const { withAuth } = require('../../utils/auth');
const Op = Sequelize.Op

router.post('/',withAuth, async (req, res) => {
  
  console.log(req.file)
  await Events.create({
    title: req.body.title,
    description: req.body.description,

  

    time: req.body.time,
    date: req.body.date,

  })
    .then((newFavorite) => res.redirect("/dashboard"))
    
    .catch((err) => {
      res.status(500).json(err)
    });
});

//==============================================|/\
// Destroy favorite referenced by it's id number|/\
//==============================================|/\

router.delete('/:id', withAuth, (req, res) => {
    Favorite.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((favoriteData) => {
        if (!favoriteData) {
          res.status(404).json({ message: 'No favorite found with this id' });
          return;
        }
        res.json(favoriteData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;
 
router.get("/add/:id", withAuth, async (req,res) => {

    try{
        const response = await Favorite.create({reader_id:req.session.user_id, book_id:req.params.id})
        res.status(200).redirect(req.headers.referer);
    }
    catch(err){
        res.status(500).redirect(req.headers.referer);  
        console.log(err);
    }
})



module.exports = router
