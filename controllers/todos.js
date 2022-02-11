const knex = require("../db/config");

// Get all todos
exports.getAllTodos = (req, res) => {
    knex.select().from("todos")
        .then(todos => res.status(200).json(todos))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

// Get all finished todos
exports.getAllFinishedTodos = (req, res) => {
    knex.select().from("todos").where({
        is_completed: true
    })
        .then(todos => {
            if(todos.length !== 0){
                res.status(200).json(todos);
            }
            else{
                res.status(200).send(false);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
}

// Get one todo by id
exports.getTodoById = (req, res) => {
    const id = req.params.id;
    knex.select().from("todos").where({id: id})
        .then(todo => {
            if(todo.length !== 0){
                res.status(200).json(todo)
            }
            else{
                res.status(400).send(false);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

// Create a todo
exports.createTodo = (req, res) => {
    const todo = {
        title: req.body.title,
        user_id: req.body.user_id
    };
    knex("todos").insert(todo)
        .then(saved => res.status(201).send(true))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

// Update a todo
exports.updateTodo = (req, res) => {
    const todo = {
        title: req.body.title,
        user_id: req.body.user_id
    };

    const id = req.params.id;

    knex("todos").update(todo).where({
        id: id
    })
        .then(todo => {
            if(todo !== 0){
                // If data is found
                res.status(201).send(true);
            }
            else{
                // If data is not found.
                res.status(400).send(false);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

// Complete a todo
exports.completeTodo = (req, res) => {
    const id = req.params.id;
    knex("todos")
        .update({
            is_completed: true
        })
        .where({
            id: id
        })
        .then(todo => {
            if(todo !== 0){
                // If data is found.
                res.status(201).send(true);
            }
            else{
                // If data is not found.
                res.status(400).send(false);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

// Delete a todo
exports.deleteTodo = (req, res) => {
    const id = req.params.id;
    knex("todos").del().where({
        id: id
    })
        .then(todo => {
            if(todo !== 0){
                // If data is found.
                res.status(201).send(true);
            }
            else{
                res.status(400).send(false);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
};