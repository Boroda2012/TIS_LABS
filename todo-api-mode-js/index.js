const express = require("express");
const app = express();
const port = 5001;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const todos = [
  { id: 1, text: "Brush teeth", completed: false },
  { id: 2, text: "Pet dog", completed: false },
  { id: 3, text: "Make Coffee", completed: false },
  { id: 4, text: "Write code", completed: false },
  { id: 5, text: "", completed: false },
];

app.listen(port, () => {
  console.log(`Node Todo API запущен на порту: ${port}`);
});

app.put("/todos/", function (req, res) {
  let todoToUpdate = todos.find((todo) => {
    return todo.id == req.body.id;
  });
  todoToUpdate = {
    id: req.body.id,
    todo: req.body.todo,
    completed: req.body.completed,
  };
  let index = todos.findIndex((todo) => {
    return todo.id == req.body.id;
  });
  todos[index] = todoToUpdate;
  return res.send(todos);
});
