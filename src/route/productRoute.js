import { Router } from "express";

export const productRoute = Router();

productRoute
.route("/")
.get(() => {
    console.log("This is get method!");
})

.post( () => {
    console.log("This is post method!");
})

.patch( () => {
    console.log("This is update method!");
})

.delete( () => {
    console.log("This is delete method!");
})

// static route
productRoute
.route("/name")
.get((req,res,next) => {
    res.json("get");
});

// dynamic route
productRoute
.route("/:id")
.get((req,res,next) => {
    res.json("get2")
    console.log(req.params)
})

