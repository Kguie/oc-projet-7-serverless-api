import express from "express";

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  return res.json({ message: "Bienvenue sur l'API KASA - backend" });
});

export default router;
