var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
// router.get("/", function (req, res) {
//   burger.selectAll(function (data) {
//     // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
//     var burgersObj = {
//       burgers: data
//     };
//     console.log(burgersObj);
//     res.render("index", burgersObj);
//   });
// });

router.get("/", function (req, res) {
  // express callback response by calling burger.selectAllBurger
  burger.selectAll(function (data) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    var burgersObj = {
      burgers: data
    };
    console.log(burgersObj);
    res.render("index", burgersObj);
  });
});

// post route -> back to index
router.post("/api/burgers", function (req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name],
    function (result) {
      // takes the request object using it as input for burger.addBurger
      res.json({ id: result.insertId });
    });
})
// put route -> back to index
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  console.log(req.body);
  burger.updateOne(condition, function (result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
//delete route for burger
router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  burger.deleteOne(condition, function (result) {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    } else {
      console.log(result);
      res.status(200).end();
    }
  });
});

module.exports = router;
