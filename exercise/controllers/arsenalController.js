const express = require("express"),
    router = express.Router(),
    arsenalModel = require("../models/arsenalModel");

router.get("/", async function(req, res, next) {
    const playerData = await arsenalModel.getAll();
    res.render("template", {
        locals: {
            title: "Arsenal First Team Players",
            data: playerData
        },
        partials: {
            partial: "partial-players"
        }
    });
});

module.exports = router;
