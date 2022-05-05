const express = require("express");
const app = express();

// set port
const PORT = 3000;

// 引入 express 讀取靜態資源
app.use(express.static(__dirname + "/public"));

// GET
app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello my express server");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
