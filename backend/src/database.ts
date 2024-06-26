import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "c120755.sgvps.net",
  user: "u1epzzap1mfbe",
  password: "fi33mdg6g5vw",
  database: "db4jha6xobt6ug",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
