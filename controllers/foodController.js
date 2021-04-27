const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.User
            .findOne({_id: req.user._id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User
            .findOneAndUpdate({_id: req.body.id},{"$push":{"food":(req.body)}})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .findOneAndUpdate({_id: req.user._id},{"$pull": {"food": {"_id": (req.query.customId)}}},{multi:true})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};