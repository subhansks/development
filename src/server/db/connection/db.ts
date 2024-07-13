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
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306", 10),
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
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
