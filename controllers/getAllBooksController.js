import { Book } from '../models/book.js'
import { messages } from '../constants/messages.js'
import { statusCodes } from '../constants/statusCodes.js'

// <------------------ Get All Book list Controller ------------------>
export const getAllBooksController = async (req, res,next) => {
    console.log(req.query);

    const limit = req.query.limit ? Number(req.query.limit) : 10;
    const pageNumber = req.query.pageNumber ? Number(req.query.pageNumber) : 1;

    console.log(limit, pageNumber);

    const skip = (pageNumber - 1) * limit;
    
    // Add a new book
    const numberOfBooks = await Book.countDocuments();
    const books = await Book.find().skip(skip).limit(limit);

    if (!books) {
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: messages.FAILED_TO_LOAD_DATA,
        });
    }

    if (books.length === 0) {
        return res.status(statusCodes.SUCCESS).json({
            success: false,
            message: messages.NO_BOOKS_FOUND,
        });
    }

    return res.status(statusCodes.SUCCESS).json({
        success: true,
        message: messages.REQUESTED_DATA,
        data: {
            count: numberOfBooks,
            books
        },
    });
}