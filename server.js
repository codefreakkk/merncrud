const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;
require("./model/dbcon");

app.use(express.json());
app.use(cors());

const user = require("./controller/users");
app.use(user);

app.listen(PORT, () => {
  console.log("server started");
});
