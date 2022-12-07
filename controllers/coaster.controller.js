const router = require("express").Router()

const Coaster = require('../models/Coaster.model')

const saludo = (req, res, next) => {
    res.status(200).json('holii!!')
}

const saveCoaster = (req, res) => {

    Coaster
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
}

module.exports = {
    saludo,
    saveCoaster
}