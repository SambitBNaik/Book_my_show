const express= require("express");
const {registerUser,loginUser,getCurrentUserInfo}=require("../Controller/userController");

const {validateJWTToken}= require("../Middleware/authMiddleware");
const userRouter= express.Router();

userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
// protected route api
userRouter.get("/getCurrentUser", validateJWTToken,  getCurrentUserInfo);


module.exports=userRouter;