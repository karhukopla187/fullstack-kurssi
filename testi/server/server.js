const express = require("express")
const PORT = process.env.PORT || 3000;
const app = express()

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});


app.get("/:quiz", (req, res) => {
    res.json({})
})

app.get("/quizzes", (req, res) => {
    res.json({})
})

app.get("/:result", (req, res) => {
    res.json({})
})

app.get("/results", (req, res) => {
    res.json({})
})

app.get("/:user", (req, res) => {
    res.json({})
})

app.get("/", (req, res) => {
    res.json({})
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})

