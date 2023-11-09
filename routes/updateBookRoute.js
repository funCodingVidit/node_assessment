import { Router } from "express";
import { validateBookValidationForUpdate, validateParamsForUpdate } from "../middlewares/validationMiddleware.js";
import { updateBookController } from "../controllers/updateBookController.js";

const router = Router();

// <------------------ Update Book Route ------------------->
router.patch("/updateBook/:bookId", validateParamsForUpdate, validateBookValidationForUpdate, updateBookController);

export default router;