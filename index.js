import express from "express";
import axios from "axios";

const app = express()
const port = 3000;

app.use(express.static("public"));

const API_URL = "https://api.thecatapi.com/v1/images/search";

app.get("/", async (req, res) => {
    const response = await axios.get(API_URL);
    res.render("index.ejs", {
        img: response.data[0].url
    });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})