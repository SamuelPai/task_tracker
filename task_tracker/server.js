const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("ping", function(req, res) {
    return res.send("pong");
})

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
})

const routes = require("./controllers/taskController");
app.use(routes);

app.listen(PORT, () => {
    console.log("Your API server is now on PORT:", PORT);
})