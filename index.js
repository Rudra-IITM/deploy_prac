require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT | 4000;

app.get("/", (req, res) => {
    res.json({
        msg: "Hello World",
    })
})

app.listen(PORT, () => {
    console.log(`Server running at port ${3000}`);
})