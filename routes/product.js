const express = require("express");
const router = express.Router();

router.get("/clothes", (req, res, next) => {
  const clothesArray = [];
  const clothes = {
    name: "T-shirt",
    price: 100,
    inventory: 10,
  };
  const clothes2 = {
    name: "shirt",
    price: 200,
    inventory: 10,
  };
  clothesArray.push(clothes);
  clothesArray.push(clothes2);
  res.json(clothesArray);
});

module.exports = router;
