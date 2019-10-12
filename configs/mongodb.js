const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "nodejs";

let _db = null;

async function initDB() {
  try {
    client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    _db = client.db(dbName);
    return true;
  } catch (err) {
    throw err;
  }
}

function getDB() {
  return _db || new Error("Connect to DB failed!");
}

function closeDB() {
  return _db.close();
}

module.exports = { getDB, initDB, closeDB };
