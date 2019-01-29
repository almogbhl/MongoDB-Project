const express = require("express");
const User = require("../db/user.model");
const mongoose = require("mongoose");
const asm = require("../utils/async_middleware");
const router = express.Router();

// router.post('/create', (req,res) => {
//     const User1 = new User({
//         _id         : mongoose.Types.ObjectId(),
//         first_name  : 'almog',
//         last_name   : 'langleben',
//         email       : 'almog@gmail.com'
//     })

//     User1.save()
//     .then( ()=> res.json({action: 'add'}))
//     .catch( err=> {
//         p.error(err);
//         next(err);
//     })

// })

router.post(
  "/create",
  asm(async (req, res) => {
    const user = new User(req.body);

    const feedback = await user.save();
    res.json(feedback);
  })
);

router.get(
  "/",
  asm(async (req, res) => {
    const find = await User.find();

    res.json(find);
  })
);

router.put(
  "/:id/update",
  asm(async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedUser);
  })
);

router.delete(
  "/:id/delete",
  asm(async (req, res) => {
    const findById = await User.findByIdAndRemove(req.params.id);
    const response = {
      message: "User successfully deleted",
      id: findById.id
    };

    res.json(response);
  })
);

module.exports = router;
