const db = require("../models");
const router = require("express").Router();

// Read All
router.route("/").get(function (req, res) {
    db.user
        .findAll({})
        .then((dbModel) => {
            console.log(dbModel)
            res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
})



// Read One
router.route("/:id").get((req, res) => {
    db.user
        .findByPk(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})


// Delete
router.route("/:id").delete((req, res) => {
    db.Book
        .destroy({
            where: { "id": req.params.id }
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});


module.exports = router;
