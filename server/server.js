const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.js");

app.use(cors());
app.use(express.json());

// WHOLE YEAR

app.get("/all/:id", async (req,res) => {
    const result = await pool.query('SELECT * FROM vrijeme where grad = $1', [req.params.id]);
    res.json(result.rows)
})

// FIRST SIX MONTHS

app.get("/firstSix/:id", async (req,res) => {
    const result = await pool.query('SELECT * FROM vrijeme WHERE grad = $1 AND mjesec BETWEEN 1 AND 6', [req.params.id]);
    res.json(result.rows)
})

// LAST SIX MONTHS

app.get("/lastSix/:id", async (req,res) => {
    const result = await pool.query('SELECT * FROM vrijeme WHERE grad = $1 AND mjesec BETWEEN 7 AND 12', [req.params.id]);
    res.json(result.rows)
})

app.listen(3000, () => {
    console.log("Server has started on port 3000");
});