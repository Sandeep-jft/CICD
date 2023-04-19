const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(
    "<h1>Hello from sandeep </h1><br /><h4>This is ec2 server runnig using pipelie </h4>"
  );
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
