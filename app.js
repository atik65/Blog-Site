const express = require("express");

const PORT = process.env.PORT || 8282;

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Welcome To blog Site!!",
  });
});

app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});
