const send = require("@polka/send-type");
import { initDB, selectQuery } from "./_helpers";
import humps from "humps";

module.exports = async (req, res) => {
  const { db } = initDB();
  const { id } = req.params;

  try {
    db.query(`SELECT * from words WHERE show_id='${id}'`, (err, results) => {
      if (err) {
        res.status(500).send(JSON.stringify({
          type: "DB_QUERY_ERROR",
          message: err
        }))
        return err;
      }
      console.log({ results });
      if (results.length > 0) {
        res.status(200).send(JSON.stringify(humps.camelizeKeys(results[0])));
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

