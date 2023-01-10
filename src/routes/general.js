import express from "express";
import { home, allQuotes, random } from "../controllers/general";

const router = express.Router();

router.get("/", home);
router.get("/quotes", allQuotes);
router.get("/quotes/random", random);

export default router;
