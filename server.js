const express = require("express");
const app = express();
const cors = require("cors");
require("./model/dbcon");

app.use(express.json());
app.use(cors());

const user = require("./controller/users");
app.use(user);

app.listen(8000, () => {
  console.log("server started");
});
