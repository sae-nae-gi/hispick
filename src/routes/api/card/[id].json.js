const send = require("@polka/send-type");
import { initDB, selectQuery } from "./_helpers";
import humps from "humps";

export const get = async (req, res) => {
  const { db } = initDB();
  const { id } = req.params;

  try {
    db.query(`SELECT * from words WHERE show_id='${id}'`, (err, results) => {
      if (err) {
        res.end(JSON.stringify({
          type: "DB_QUERY_ERROR",
          message: err
        }))
        return err;
      }
      console.log({ results });
      if (results.length > 0) {
        res.end(JSON.stringify(humps.camelizeKeys(results[0])));
      }
      else {
        res.end(JSON.stringify(null))
      }
    });
  }
  catch (e) {
    res.status(500).json({ error: e.message });
    send(res, 500, e)
  }
}

