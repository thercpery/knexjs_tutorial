const knex = require("../db/config");

// Check if email exists
exports.checkEmailExists = (req, res) => {
    knex.select().from("users").where({
        email: req.body.email
    })
        .then(user => {
            if(user.length !== 0){
                // Email exists
                res.send(false);
            }
            else{
                // Email does not exist.
                res.send(true);
            }
        })
        .catch(err => {
            res.status(500).json(err);
        })
};

// Register a user
exports.register = (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email
    };

    knex("users").insert(user)
        .then(user => res.status(201).send(true))
        .catch(err => res.status(500).send(false));
};

// Get todos by user ID
exports.getUserDetails = (req, res) => {
    knex.select().from("todos").innerJoin("users", {"users.id": "todos.user_id"}).where({
        user_id: req.params.id
    })
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};