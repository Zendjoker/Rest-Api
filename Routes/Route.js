const express =require("express");
const { addUser, getAllUser, getOneUser, deleteOneUser, updateOneUser, justForTest } = require("../controllers/user.controllers");
const User = require("../models/User");
const router=express.Router();
router.get("/test",justForTest);
//CRUD
//methode: POST
//data: req.body
//url : http://localhost:4000/api/user/
router.post("/",addUser);

//methode: GET
//data:
// url : http://localhost:4000/api/user/
router.get("/",getAllUser);

//methode: Get one contact by id
//data: req.params
// url : http://localhost:4000/api/user/:id
router.get("/:id",getOneUser);

//methode: Delete one contact by id
//data: id=req.params
// url : http://localhost:4000/api/user/:id
router.delete("/:id",deleteOneUser);

//methode: Put one contact by id
//data: id=req.params +body(modification)
// url : http://localhost:4000/api/user/:id
router.put("/:id",updateOneUser);

module.exports=router;