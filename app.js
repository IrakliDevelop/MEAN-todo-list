const express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    Todo = require("./models/todo"),
    cors = require("cors"),
    path = require("path");


//mongoose setup
mongoose.connect("mongodb://localhost/todo_ang_node", (err) => {
    if (err) console.log(err);
});

//Static folder
app.use(express.static(path.join(__dirname, '/public')));

app.use(cors());

//body parser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//landing
app.get("/", (req, res) => {
    res.send("working");
});


//get todos
app.get("/todos", (req, res) => {
    Todo.find((err, todos) => {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    })
});


//create new todo
app.post("/todos", (req, res) => {
    const newTodo = new Todo({
        text: req.body.text
    });

    Todo.create(newTodo, (err, the_todo) => {
        if (err) {
            console.log(err);
        } else {
            res.json(the_todo);
        }
    })
});

app.delete("/todos/", (req, res) => {
    const id = req.body._id;
    console.log(id)
    Todo.findOneAndDelete({"_id": id}, (err, deleted) => {
        if (err) {
            throw err;
        } else {
            res.json(deleted);
        }
    })
});



const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server has started at port ${port}`)
})