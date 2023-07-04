/**
 *Définition de la route lodging
 **/

import express from "express";

const lodgingCtrl = require("../controllers/lodgings");

const router = express.Router();

//Affiche le logement dont on rentre l'id
router.get("/:id", lodgingCtrl.getOneLodging);

//Affiche tous les logements
router.get("/", lodgingCtrl.getAllLodgings);

export default router;