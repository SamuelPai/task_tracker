const db = require("../models");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

module.exports = function (router) {
    const authorizeAccessToken = jwt({
        secret: jwksRsa.expressJwtSecret({
            cache:true,
            rateLimit:true,
            jwksRequestsPerMinute:5,
            jwksUri: `https://task-motivator.us.auth0.com/.well-known/jwks.json`
        }),
        audience: "https://quickstarts/api",
        issuer: "https://task-motivator.us.auth0.com",
        algorithms: ["RS256"]
    });

    router.get("/api/tasks", authorizeAccessToken, (req, res) => {
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
        }, {
                where: {
                    id: req.body.id
                }
            }).then(response => {
                res.json(response)
            })
    })
}
