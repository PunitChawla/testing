import express from "express";
const app = express();
const port = 9000;
app.use('/', (req,res)=>{
    res.send("hello for server ")
})
app.listen(port , ()=>{
    console.log(`server is running on port ${port}`);
})
