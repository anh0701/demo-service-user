import express from "express";
import dotenv from "dotenv";
dotenv.config();
// import initWebRouter from "./routes/web.js";
const app = express();
const port = process.env.PORT || 8000;

// initWebRouter(app)

app.get("/", (req, res) => {
    res.send([{title: "Thinh beu"}])
})

app.listen(port, (err) => {
    if (!err) {
        console.log(`connect http://localhost:${port}`);
    }
})