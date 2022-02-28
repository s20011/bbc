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
}