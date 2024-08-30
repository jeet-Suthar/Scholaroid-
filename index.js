import express from "express";
import bodyParser from "body-parser";


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("<h1> Hello this is home page madafakar</h1>")
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
});