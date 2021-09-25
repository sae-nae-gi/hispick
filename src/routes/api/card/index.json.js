const send = require("@polka/send-type")
import { initDB, selectQuery } from "./_helpers";
import humps from "humps";

const getCallback = (err, results, fields) => {
  if (err) {
    // Promise.reject(err);
    return err;
  }
  // Promise.resolve(results);
  return results
}


export const get = async (req, res) => {
  const { db } = initDB();

  try {
    db.query("SELECT * from words", (err, results) => {
      if (err) {
        console.log("err exists: ", err);
        return err;
      }
      // Promise.resolve(results);
      console.log({ results });
      res.end(JSON.stringify(humps.camelizeKeys(results)));
    }
    );
    // humps.camelizeKeys()
  }
  catch (e) {
    console.error("index.json.js get: ", e);
    res.status(500).json({ error: e.message });
    send(res, 500, e)
  }
}