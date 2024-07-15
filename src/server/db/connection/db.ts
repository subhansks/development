import { drizzle } from "drizzle-orm/mysql2";
import { createPool } from "mysql2";
import * as schema from "../../drizzle/Schema/schema";

const getConnection = () => {
  if (process.env.DB_URL) {
    return createPool({
      uri: process.env.DB_URL,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  return createPool({
    host: "c120755.sgvps.net",
    // port: parseInt(process.env.DB_PORT || "3306", 10),
    user: "u3578tvfn1d5a",
    password: "db54c11Cb@8|",
    database: "dby7k1wm00xyri",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
};

const connection = getConnection();

connection.on("connection", (conn) => {
  console.log("DB connected:", conn.threadId);
  conn.query("SET sql_mode = ''");
});
connection.on("error", (err) => {
  console.error("DB error:", err);
});

export const db = drizzle(connection, { schema, mode: "default" });
