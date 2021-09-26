const send = require("@polka/send-type")
import { initDB, getRandomCardIndex } from "./_helpers";
import humps from "humps";

export const get = async (req, res) => {
  const { db } = initDB();
  const query = req.query.id
    ? `SELECT * from words WHERE show_id='${req.query.id}'`
    : "SELECT * from words";

  try {
    db.query(query, (err, results) => {
      if (err) {
        res.end(JSON.stringify({
          type: "DB_QUERY_ERROR",
          message: err
        }))
        return err;
      }
      if (results.length > 0) {
        res.end(JSON.stringify({ contents: humps.camelizeKeys(results), isEmpty: false }));
        console.log({ results })

      } else {
        res.end(JSON.stringify({ isEmpty: true, contents: [] }))
      }
    }
    );

  }
  catch (e) {
    res.status(500).json({ error: e.message });
    send(res, 500, e)
  }
}