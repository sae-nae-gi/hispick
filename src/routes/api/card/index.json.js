const send = require("@polka/send-type")
import { initDB, selectQuery } from "./_helpers";
import humps from "humps";

export const get = async (req, res) => {
  const { db } = initDB();

  try {
    db.query("SELECT * from words", (err, results) => {
      if (err) {
        res.end(JSON.stringify({
          type: "DB_QUERY_ERROR",
          message: err
        }))
        return err;
      }
      console.log({ results });
      res.end(JSON.stringify(humps.camelizeKeys(results)));
    }
    );
  }
  catch (e) {
    res.status(500).json({ error: e.message });
    send(res, 500, e)
  }
}