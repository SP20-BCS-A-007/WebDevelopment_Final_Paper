const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const usersApiRouter = require("./routes/api/users")
const port = 2000;

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/api/users", usersApiRouter)

app.get("/", (req, res)=>{
  res.send("Hello")
})

app.listen(port, function() {
  console.log(`Server started on port ${port} and your link is http://localhost:${port}`);
});

mongoose.connect("mongodb://localhost/question1").then(()=>{
    console.log("connected to mongodb:localhost//question1");
}).catch(()=>{
    console.log("unable to connect");
});

