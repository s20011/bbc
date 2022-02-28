"use strict";


module.exports = {
    indexView: (req, res) => {
        res.render("index", {categorytitles: ["ニュース", "学問", "食べ物", "趣味", "その他"]});
    },
}