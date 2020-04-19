const tasks = require("../dbConfig/dbModel");
const express = require("express");
const router = express.Router();

router.get("/api/tasks", (req, res) => {
    tasks.getTasks(data => {
        res.json(data);
    })
})

module.exports = router;
