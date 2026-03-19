const express = require("express");
const cors = require("cors");

const assets = require("./data");
const simulateAttack = require("./simulateAttack");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/simulate-attack", (req, res) => {
  const randomAsset = assets[Math.floor(Math.random() * assets.length)];

  const result = simulateAttack(randomAsset);

  res.json({
    asset: randomAsset.name,
    ...result
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
