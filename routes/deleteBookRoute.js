import { Router } from "express";
import { validateParamsForUpdate } from "../middlewares/validationMiddleware.js";
import { deleteBookController } from "../controllers/deleteBookController.js";

const router = Router();

// <------------------ Update Book Route ------------------->
router.delete("/deleteBook/:bookId", validateParamsForUpdate, deleteBookController);

export default router;