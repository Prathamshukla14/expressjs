const express = require("express");
const app = express();

app.use(function(req, res, next){
    console.log("middleware is running");
    next();
})

app.get("/", function(req, res){
    res.send("hey, there !");

})

app.get("/profile", function(req, res, next){
    return next(new error("something went wrong"))
    
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(3000);