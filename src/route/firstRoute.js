import { Router } from "express";

export const firstRoute = Router();

firstRoute
.route("/")
.get((req,res,next) => {
    res.json("This is first route get method!");
})

.post( (req,res,next) => {
    res.json(`Hello my name is ${req.body.name}! and and I live in ${req.body.address}`);
})

.patch( (req,res,next) => {
    res.json(`Hello The name was update and the ${req.body.name} and the ${req.body.address}`);
})

.delete( (req,res,next) => {
    res.json("This is first route delete method!");
})