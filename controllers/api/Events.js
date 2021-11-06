const router = require('express').Router();
const multer = require('multer');
const { Events } = require('../../models');
const { isAdmin, withAuth } = require('../../utils/auth');



//=======================================================
//Create a new event if you are loggined and admin. 
//=======================================================


router.post('/',isAdmin, withAuth, async (req, res) => {
  
  console.log(req.file)
  await Events.create({
    title: req.body.title,
    description: req.body.description,
  
  })
    .then((newEvent) => res.redirect("/librarian/events"))
    
    .catch((err) => {
      res.status(500).json(err)
    });
});

//==========================================|/\
// Destroy note referenced by it's id number|/\
//==========================================|/\



router.delete('/:id', isAdmin, withAuth, (req, res) => {
  Events.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((eventData) => {
      if (!eventData) {
        res.status(404).json({ message: 'No Event found with this id' });
        return;
      }
      res.json(eventData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
                                    //----------|=
//===================================|-=/\\/\/\/|=
// Update event info referenced by id|-=/\\//\/\|=
//===================================|-=/\\/\/\/|=
                                    //----------|=
router.put('/:id', isAdmin, withAuth, async (req, res) => {
  await Events.update({
    where: req.params.id,
  })
    .then((eventData) => {
      if (!eventData) {
        res.status(404).json({ message: 'No Event found with this id' });
        return;
      }
      res.json(eventData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});



  
  

module.exports = router;
