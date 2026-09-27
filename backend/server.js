const express = require("express");
const cors = require("cors")
const app = express();
const PORT = 3000;
app.use(cors({
    origin:[
        "http://127.0.0.1:5500",
        "http://localhost:5500"
    ]
}));
app.use(express.json());
app.get("/", (req, res) =>{
    res.send("Photography website backend is running!");
});
app.get("/api", (req, res) =>{
    res.json({
        message:"Photography website API is working!"
    })
})
app.post("/api/test", (req, res) => {
    console.log(req.body);

    res.json({
        message: "Data received successfully!",
        receivedData: req.body
    });
});
app.listen(PORT,() =>{
    console.log(`Server is running at http://localhost:${PORT}`);
});