// Make backend using express and export a port

import express from "express";
import { firstRoute } from "./src/route/firstRoute.js";
import { productRoute } from "./src/route/productRoute.js";
import { userRoute } from "./src/route/userRoute.js";
import { json } from "express";

const app = express();

// listen port
app.listen(8000,() => {
    console.log("Listening at 8000 ):");
}
);

app.use(json()) // make backend capable of taking json data

app.use(firstRoute);
app.use("/product",productRoute);
app.use("/user",userRoute);