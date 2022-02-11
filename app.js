const express = require("express");
const app = express();
const todosRoutes = require("./routes/todos");
const usersRoutes = require("./routes/users");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT = 5000;

app.get("/", (req, res) => res.send("Hi."));
app.use("/api/todos", todosRoutes);
app.use("/api/users", usersRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));