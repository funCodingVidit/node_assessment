import { Router } from "express";
import { getBookValidation } from "../middlewares/validationMiddleware.js";
import { getBookByIdController } from "../controllers/getBookByIdController.js";

const router = Router();

// <------------------ Add Book Route ------------------->
router.get("/getBookById/:bookId", getBookValidation, getBookByIdController);

export default router;