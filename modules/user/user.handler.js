const db = require("configs/mongodb").getDB();
const errorHandler = require("utils/handlers/error.handler");

async function getAllUsers(_, res) {
  const userCollection = db.collection("users");
  const allUsers = await userCollection.find({}).toArray();

  res.send(allUsers);
}

const handlers = { getAllUsers };
module.exports = errorHandler(handlers);
