const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const Todo = require("./models/todos")
const todoApiRouter = require("./routes/api/todo")
const port = 2000;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.set('strictQuery', true);
app.use("/api/todo",todoApiRouter)

app.get("/", (req, res)=>{
  res.send("Hello")
})
mongoose.connect("mongodb://localhost/question2").then(()=>{
    console.log("connected to mongodb:localhost//question2");
}).catch(()=>{
    console.log("unable to connect");
});

app.listen(port, ()=>{
      console.log(`Server started on port ${port} and your link is http://localhost:${port}`)


});