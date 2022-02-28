"use strict";

const express = require("express"),
    app = express(),
    layouts = require("express-ejs-layouts"),
    router = require("./routes/index"),
    mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect(
    "mongodb://localhost:27017/bbc_db",
    error => {
        if(error) throw error;
        console.log("mongodb connectd!");
    }
);

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.use("/", router);

app.listen(app.get("port"), () => {
    console.log(`The bulletinboard server has started and is listening on port number: ${app.get("port")}`)
})

