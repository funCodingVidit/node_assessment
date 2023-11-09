import { Router } from "express";
import addBookRoute from './addBookRoute.js';
import getAllBooksRoute  from "./getAllBooksRoute.js";
import getBookByIdRoute from "./getBookByIdRoute.js";
import updateBookRoute from './updateBookRoute.js';
import deleteBookRoute from './deleteBookRoute.js';

const router = Router();

//<-------------Use All Available Routes in V1-------------->
router.use('/v1', addBookRoute, getAllBooksRoute, getBookByIdRoute, updateBookRoute, deleteBookRoute);

export default router;