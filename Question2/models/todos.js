const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
   title: String,
   description: String
});

const Todo = mongoose.model("TodoList", todoSchema);
module.exports = Todo;