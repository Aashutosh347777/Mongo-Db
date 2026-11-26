import { Router } from "express";

export const userRoute = Router();

userRoute
.route("/")
.get((req,res,next) => {
    res.json("This is first route get method from user!");
})

.post( (req,res,next) => {
    res.json(`User route -> Hello my name is ${req.body.name}! and and I live in ${req.body.address}`);
})

.patch( (req,res,next) => {
    res.json(`User route ->  Hello The name was update and the ${req.body.name} and the ${req.body.address}`);
})

.delete( (req,res,next) => {
    res.json("User route ->  This is first route delete method!");
})