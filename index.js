const PORT = 3333;
const express = require("express");
const app = express();
app.use(express.json())


// Routes
app.get("/", (req, res) => {
    res.json("200");
});
app.post("/", (req, res) => {
   // console.log(req);
    res.json(req.body);
});


app.listen(PORT, () => console.log(`
    Server Running: http://localhost:${PORT}
`))