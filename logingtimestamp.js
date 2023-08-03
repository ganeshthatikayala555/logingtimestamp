var express=require('express');
var app=express();

//////this is custom midleware

function mylog(req,res,next){
    console.log(`Received at ${new Date()}`);
    next();
}
///(registering custom midleware globally)we are using mylog globally ,,,that is every request comes to my log first before handled by their routers irrespective of their routing(get/post)
 app.use(mylog);

 app.get('/hello',(req,res)=>{
   res.send("hello world");
 });
 app.listen(4006,()=>{
    console.log("listening");
 })