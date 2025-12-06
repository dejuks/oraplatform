import "dotenv/config";
import express from "express";
import app from "./src/app.js"; // Import your app

const server = express();

// Mount your app (all routes are inside `app.js`)
server.use("/", app);

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
