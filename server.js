const express = require("express");
const path = require("path");
const { items } = require("./item");
const { appertize } = require("./appertize");

const app = express();
const PORT = 3000;

// Serve static files (images)
app.use("/images", express.static(path.join(__dirname, "public")));

// Route to return JSON list
app.get("/api/items", (req, res) => {
    res.json(items);
});

app.get("/api/appertize", (req, res) => {
    res.json(appertize);
});

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to JsonServer! Use /api/items to get data.");
});

// Start server
app.listen(PORT, () => {
    console.log(`JsonServer running at http://localhost:${PORT}`);
});
