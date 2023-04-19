const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.get("/list", (req, res) => {
  res.status(200).json({
    data: [
      { name: "Sandeep", age: "23" },
      { name: "Akash", age: "28" },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
