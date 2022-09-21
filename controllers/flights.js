const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight');

// INDUCES -- if you put your routes in this order, it will never fail you!

// Index -- View of ALL ITEMS

router.get('/', (req, res) => { 
  Flight.find({}, (error, allFlights) => {
    res.render('flights/Index', {
      flights: allFlights
    });
  })// Route is technically /flights because in server.js it is put as the base route for this controller
  // in here goes a Flight.find({}) to find all of your flights and then a res.render to show the view associated with them! (Index.jsx view)
})

// New -- Form to CREATE a new Item

router.get('/new', (req, res) => { 
  
  // technically /flights/new
  res.render('flights/new')

  // In here goes a res.render to show the 'create a new flight' form (New.jsx view)
})

// Delete -- action to DELETE an item

// app.delete('/flights/:id', (req, res) => {
//   Flight.deleteOne({
//     _id: req.params.id
//   }, (error, data) => {
//     console.log(data);
//     res.redirect('/flights');
//   })
// });

// Update -- action to UPDATE an item

// app.put('/flights/:id', (req, res) => {
//   if (req.body.departs === 'on') {
//     req.body.departs= true
//   } else {
//     req.body.readyToFly = false
//   }
//   Flight.updateOne({
//     _id: req.params.id
//   }, req.body, (error, data) => {
//     if (error) {
//       console.error(error);
//       res.json({
//         error: error
//       });
//     } else {
//       res.redirect(`/fruits/$req.params.id`);
//     }
//   });
// });

// Create -- action to CREATE a new item

// app.post('/flights', (req, res) => {
//   if (req.body.readyToEat === 'on') {
//     req.body.readyToEat = true;
//   } else {
//     req.body.readyToEat = false;
//   }
//   Fruit.create(req.body, (error, createdFruit) => {
//     res.redirect('/fruits')
//   })
// });
router.post('/', (req, res) => { // technically /flights
  // In here goes your Flight.create(), passing your req.body to it, and res.redirect-ing to your index page.
})

// Edit -- Form to UPDATE an item

// Show -- View of ONE ITEM
router.post('/', (req, res) => {
  Flight.create(req.body, (error, createdFlight) => {
    res.redirect('/flights')
  })
})

module.exports = router;