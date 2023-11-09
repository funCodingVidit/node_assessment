import { Router } from "express";
import { getAllBooksController } from "../controllers/getAllBooksController.js";

const router = Router();

// <------------------ Add Book Route ------------------->
router.get("/getAllBooks", getAllBooksController);

export default router;