/**
 * Controllers des loggings
 **/

import { Response, NextFunction } from 'express';

const Lodging = require("../models/lodging");

/*Affiche le nom d'un logement selon son id*/
exports.getOneLodging = async (req: any, res: Response, next: NextFunction) => {
    try {
        const lodging = await Lodging.findById(req.params.id)
        return res.status(200).json(lodging)
    } catch (error) {
        return res.status(500).json({ error });
    }
};


/*Affiche tous les logements*/
exports.getAllLodgings = async (req: any, res: Response, next: NextFunction) => {
    try {
        const lodgings = await Lodging.find()
        return res.status(200).json(lodgings)

    } catch (error) {
        return res.status(500).json({ error });
    }
};