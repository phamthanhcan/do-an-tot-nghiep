const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 7009;
app.use(express.json());

// Routes init
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
