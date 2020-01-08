const db = require("../models");
const router = require("express").Router();

// Read All
router.route("/").get(function (req, res) {
    db.Book
        .findAll({})
        .then((dbModel) => {
            console.log(dbModel)
            res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
})

// Create
router.route("/").post((req, res) => {
    db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Read One
router.route("/:id").get((req, res) => {
    db.Book
        .findByPk(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})

// Update 
router.route("/:id").put((req, res) => {
    db.Book
        .update({where: { "id": req.params.id }}, req.body)
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
