const express =require('express');
const user =require('./routes/user');
const app =express();
app.use(user);
app.listen(7000,(err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("server is listing to 7000");
    }
})