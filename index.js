const express=require("express");
const routerPost = require("./routes/post");
const routerUser = require("./routes/user");
const app=express()

app.use(express.json())
app.use('/api/user', routerUser)
app.use('/api/post', routerPost)

app.listen(5000,()=>{
    console.log("listening on port 5000!");
})