const connection = require("./connection");
// this is my orm
const tasks = {
    getTasks() {
        const queryString = `SELECT * FROM tasks;`;
        connection.query(queryString, function(err, data) {
            if(err) throw err;
            res.json(data);
        })
    }
}

module.exports = tasks;