const express = require("express");
const path = require("path");
var router = express.Router();
 
//Importing Schemas
const AdminLogin = require("./SmakoshAdmin/modals/user.js")
const { db, collection } = require("./SmakoshAdmin/modals/schema.js");
const collections = require("./SmakoshAdmin/modals/sub_schema.js");


//add sub category
router.get("/SubCategory", function (req, res) {
    res.sendFile(__dirname + "/views/Admin/sub-category.html");
  });
  
  router.post("/sub", (req, res) => {
    var name = req.body.name;
    var subcategoryname = req.body.subcategoryname;
    var description = req.body.description;
  
    var obj = new collections({
      name: name,
      subcategoryname: subcategoryname,
      description: description,
    });
    db.collection("Addsubcategory").insertOne(data, (err, collection) => {
      console.log("Added Successfully");
    });
  
    return res.send("Sub Catergory Added Successfully!");
  });
  
 

  module.exports=router