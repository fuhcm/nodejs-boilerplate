const express = require("express");
const router = express.Router();

const { getAllUsers } = require("modules/user/user.handler");

router.route("/").get(getAllUsers);

module.exports = router;
