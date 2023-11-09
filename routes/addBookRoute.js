import { Router } from "express";
import { addBookValidation } from "../middlewares/validationMiddleware.js";
import { addBookController } from "../controllers/addBookController.js";

const router = Router();

// <------------------ Add Book Route ------------------->
router.post("/addBook", addBookValidation, addBookController);

export default router;