require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
    res.send("Hello, WebStorm & Node.js!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
