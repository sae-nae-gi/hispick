import mysql from "mysql2";

export const selectQuery = `SELECT * FROM words`


export function initDB() {
  const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  db.connect((err) => {
    if (err) {
      console.log("err on connection: ", err);
      throw Error({
        type: "DB_CONNECTION_ERROR",
        message: err,
      })
    }
  });

  return { db };

}

export const getRandomCardIndex = (card) => {
  return Math.trunc(Math.random() * card.length + 1)
}