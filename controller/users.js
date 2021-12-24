const express = require("express");
const app = express();
const userSchema = require("../model/user");

const router = express.Router();

router.get("/adduser", (req, res) => {
  try {
    userSchema.find((err, data) => {
      if (!err) {
        res.send(JSON.stringify(data));
      } else {
        res.send({ text: 0 });
      }
    });
  } catch (err) {
    res.send(err);
  }
});

// insert route
router.post("/adduser", (req, res) => {
  const uname = req.body.uname;
  const uemail = req.body.uemail;
  try {
    const data = new userSchema({
      uname,
      uemail,
    });

    data.save((err, data) => {
      if (!err) {
        res.send({ inserted: true });
      } else {
        res.send({ inserted: false });
      }
    });
  } catch (err) {
    res.send(err);
  }
});

// delete route
router.delete("/deleteuser/:id", (req, res) => {
  const id = req.params.id;
  try {
    userSchema.findOneAndDelete({ _id: id }, (err, data) => {
      if (!err) {
        res.send({ delete: true });
      } else {
        res.send({ delete: false });
      }
    });
  } catch (err) {
    res.send({ delete: false });
  }
});

// update route
router.patch("/edituser/:id", (req, res) => {
  const id = req.params.id;
  try {
    userSchema.findOneAndUpdate(
      { _id: id },
      { $set: req.body },
      (err, data) => {
        if (!err) {
          res.send({ updated: true });
        } else {
          res.send({ updated: false });
        }
      }
    );
  } catch (err) {
    res.send({ updated: false });
  }
});

// get data for update route
router.get("/getuser/:id", (req, res) => {
  try {
    userSchema.findOne({ _id: req.params.id }, (err, data) => {
      if (!err) {
        res.send(JSON.stringify(data));
      } else {
        res.send({ res: [] });
      }
    });
  } catch (err) {
    res.send({ res: [] });
  }
});

module.exports = router;
