"use strict";

const Thread = require("../models/Thread");

module.exports = {
    threadView: (req, res) => {
        let category = req.params.category;
        /*Thread.create(
            {
                title: "TEST00",
                categoryname: "ニュース"
            },

            function (error, savedDocument) {
                if(error) console.log(error);
                console.log(savedDocument)
            }
        )*/
        console.log(`${category}`)
        Thread.find({categoryname: category})
            .then(thread => {
                console.log(`${thread}`)
                console.log(`${thread.title}`)
                res.render("thread", {categorytitle: category, threads: thread})
            });
    },
    newView: (req, res) => {
        res.render("new")
    },
    create: (req, res, next) => {
        let params = {
            title: req.body.title,
            categoryname: req.params.category
        };
        Thread.create(params)
            .then(thread => {
                res.locals.redirect = "/";
                res.locals.threads = thread
            })
            .catch(error => {
                console.log("Error")
                next(error)
            })
    },
    redirectView: (req, res, next) => {
        let Path = res.locals.redirect;
        if(Path !== undefined) res.redirect(Path)
        else next();
    }
}