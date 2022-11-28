const Taxi = require('../models/cab');



module.exports.index = (req, res, next) => {
    Taxi.findAll().then(cab => {
        res.render('cab-index', {
            data: cab,
            // identity: req.identity.user
        });
    })
}

module.exports.create = (req, res, next) => {
    res.render('cab-create');
}

module.exports.createPost = (req, res, next) => {

    Taxi.create({
        name: req.body.name,
        color: req.body.color,
        cabplateno: req.body.cabplateno,
        cabsize: req.body.cabsize

    })
        .then(cabFromDb => {
            res.redirect("/cabdetail")
        })

}

module.exports.update = async (req, res, next) => {
    Taxi.findByPk(req.params.id)
        .then(cabFromDB => {
            res.render('cab-update', {
                data: cabFromDB
            });
        });

}
module.exports.updatePost = async (req, res, next) => {

    await Taxi.update(
        {
            name: req.body.name,
            color: req.body.color,
            cabplateno: req.body.cabplateno,
            cabsize: req.body.cabsize
        },
        {
            where: { id: req.params.id }
        }
    )
    res.redirect("/cabdetail");

}

module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let cabFromDB = await Taxi.findByPk(id);
    if (cabFromDB != null) {
        await Taxi.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/cabdetail");
    }
}