// import bodyParser from "body-parser";
// import express from "express";
// import cors from "cors";

// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json({ limit: "50mb" }));
// app.use(cors());

// app.post("/some", async function (req, res) {
//   let n = await req.body;
//   console.log(n);
//   res.send(req.body);
// });

// app.listen(5173, () => console.log("Server is running on port 3000"));

// ********************************

// import express, { Request, Response } from "express";

// const app = express();
// const port = 3000;

// app.use(express.json());

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello, TypeScript with Express!");
// });

// // Basic CRUD routes
// app.get("/items", (req: Request, res: Response) => {
//   // Get all items
//   res.json({ message: "Fetching all items" });
// });

// app.post("/items", (req: Request, res: Response) => {
//   // Create a new item
//   res.json({ message: "Creating an item", item: req.body });
// });

// app.get("/items/:id", (req: Request, res: Response) => {
//   // Get an item by ID
//   res.json({ message: `Fetching item with ID ${req.params.id}` });
// });

// app.put("/items/:id", (req: Request, res: Response) => {
//   // Update an item by ID
//   res.json({
//     message: `Updating item with ID ${req.params.id}`,
//     item: req.body,
//   });
// });

// app.delete("/items/:id", (req: Request, res: Response) => {
//   // Delete an item by ID
//   res.json({ message: `Deleting item with ID ${req.params.id}` });
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

// ********************************

import express, { Request, Response } from "express";
import { pool } from "./database";

const app = express();
const port = 3000;

app.get("/", async (req: Request, res: Response) => {
  console.log("Hello, TypeScript with Express!");
  try {
    const [rows] = await pool.query("SELECT * FROM activity");
    res.json(rows);
  } catch (err) {
    res.status(500).send("Error connecting to the database");
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
