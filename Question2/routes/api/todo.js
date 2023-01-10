const express = require("express");
const Todo = require("../../models/todos")
const Router = express.Router();

Router.get("/", async(req, res)=>{
   let todo = await Todo.find();
   if(!todo){
    return res.send("The todo list is empty")
   }
   res.send(todo)
})

Router.get("/:id", async (req, res) => {
    let todo = await Todo.findById(req.params.id);
    if(!todo){
       return res.send({
            success: false,
            message: "Todo list donot found"
        })
    }
    res.send(todo);
});

Router.post("/", async(req, res)=>{
    let todo = new Todo(req.body)
    await todo.save();
    res.send(todo)
})

Router.delete("/:id", async (req, res) => {
    let todo = await Todo.findById(req.params.id);
    if(!todo){
       return res.send({
            success: false,
            message: "No Todo found"
        })
    }
    await todo.delete();
    res.send({
        message: "This todo is successfully deleted",
        todo
    });
});

Router.put("/:id", async (req, res) => {
    let todo = await Todo.findById(req.params.id);

    if(!todo){
       return res.send({
            success: false,
            message: "Todo donot found"
        })
    }
    
    todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true,
    runValidators: true,
    useFindAndModify: false
})
    
    await todo.save();
    res.send(todo);
});

module.exports = Router;