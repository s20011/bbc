"use strict";

const Thread = require("../models/Thread");

module.exports = {
    threadView: (req, res) => {
        let category = req.params.category;
        console.log(`${category}`)
        Thread.find({category: category})
            .then(thread => {
                console.log(`${thread}`)
                res.render("thread", {categorytitle: category, threads: thread})
            });
    },
    newView: (req, res) => {
        res.render("new")
    },
    create: (req, res, next) => {
        let params = {
            title: req.body.title,
            category: req.params.category
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