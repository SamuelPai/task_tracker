
const db = require("../models");

module.exports = function(router) {

    router.get("/api/tasks", (req, res) => {
        db.Task.findAll({}).then(data => {
            res.json(data);
        });
    });

    router.post("/api/task", (req, res) => {
        db.Task.create({
            task: "take out the trash"
        }).then(data => {
            res.json(data)
        }).catch(err => res.json(err))
    })
}
