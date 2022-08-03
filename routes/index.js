const express = require("express");
const router = express.Router();

console.log("excute indexjs Router");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
