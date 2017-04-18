var express= require("express"),
	bodyParser=require("body-parser"),
	mongoose=require("mongoose"),
	userModelController=require(__dirname+"/server/controllers/userModel.controller.js");

mongoose.Promise=global.Promise;
mongoose.connect("mongodb://nitishbali:nitishbali@ds011258.mlab.com:11258/balidb");

var app=express();
app.use(bodyParser());
app.use("/client/js",express.static(__dirname+"/client/controllers"));

app.get("/",function(req,res){
	res.sendFile(__dirname+"/public/index.html");
});

//RESTFUL APIS
app.get("/api/userModel",userModelController.getUsers);
app.put("/api/updateUserModel/:_id",userModelController.updateUser);
app.delete("/api/deleteUserModel/:_id",userModelController.deleteUser);
app.post("/api/userModel",userModelController.createUser);

var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log("HTTP server is up & Running on port " + port);
});
