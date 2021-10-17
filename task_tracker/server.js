const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const db = require("./models");
const cors = require('cors');
const authConfig = require("./src/auth_config.json");


if (!authConfig.domain || !authConfig.audience) {
    throw new Error(
        "Please make sure that auth_config.json is in place and populated."
    );
}


var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }
app.use(cors(corsOptions)) 

app.use(express.static(path.join(__dirname, "build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("ping", function (req, res) {
    return res.send("pong");
})



// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "build", "index.html"));
// })

require("./controllers/taskController")(app);

db.sequelize.sync().then(function() {

    app.listen(PORT, () => {
        console.log("Your API server is now on PORT:", PORT);
    })

})