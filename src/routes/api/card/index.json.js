const send = require("@polka/send-type")
import { initDB, getRandomCardIndex } from "./_helpers";
import humps from "humps";

export const get = async (req, res) => {
  const { db } = initDB();
  const query = req.query.id
    ? `SELECT * from words WHERE show_id='${req.query.id}'`
    : "SELECT * from words";

  const allTheTime = req.query.God === "isGood";

  try {
    if (req.query.id || allTheTime) {
      db.query(query, (err, results) => {
        if (err) {
          res.end(JSON.stringify({
            type: "DB_QUERY_ERROR",
            message: err
          }))
          return err;
        }
        if (results.length > 0) {
          if (allTheTime) {
            res.end(JSON.stringify({ ...humps.camelizeKeys(results[getRandomCardIndex(results)]), isEmpty: false }));
          }
          else {
            res.end(JSON.stringify({ ...humps.camelizeKeys(results[0]), isEmpty: false }));
          }
        } else {
          res.end(JSON.stringify({ isEmpty: true }))
        }
      }
      );
    }
    else {
      res.end(JSON.stringify({ isEmpty: true }))
    }
  }
  catch (e) {
    res.status(500).json({ error: e.message });
    send(res, 500, e)
  }
}