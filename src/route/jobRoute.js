import { Router } from "express";

export const jobRoute = Router();

jobRoute
.route("/")
.post(() => {
    res.json("Created Sucessfully");
})

.get( () => {
    res.json("Read Sucessfully");
})

jobRoute
route("/:id")
.get( () => {
    res.json("Read Sucessfully");
})

.patch( () => {
    res.json("Updted Sucessfully");
})

.delete( () => {
    res.json("Deleted Sucessfully!");
})


