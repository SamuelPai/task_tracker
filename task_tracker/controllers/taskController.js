
const db = require("../models");

module.exports = function(router) {

    router.get("/api/tasks", (req, res) => {
        db.Task.findAll({}).then(data => {
            res.json(data);
        });
    });

    router.post("/api/task", (req, res) => {
        console.log(req.body)
        db.Task.create({
            task: req.body.task
        }).then(data => {
            res.json(data)
        }).catch(err => res.json(err))
    })

    router.delete("/api/task/:id", (req, res) => {
        db.Task.findByPk(req.params.id)
        .then(task => task.destroy())
        .then(task => res.json(task))
        .catch(err => res.status(422).json(err))
    })

    router.put("/api/task", (req, res) => {
        db.Task.update({
            task: req.body.task,
            completed: req.body.complete
        }), {
            where: {id:req.body.id}
        }
    }).then(res => {
        res.json(res)
    })
}
