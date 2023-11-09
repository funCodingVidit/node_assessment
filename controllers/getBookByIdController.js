import { Book } from '../models/book.js'
import { messages } from '../constants/messages.js'
import { statusCodes } from '../constants/statusCodes.js'

// <------------------ Get All Book list Controller ------------------>
export const getBookByIdController = async (req, res) => {
    console.log(req.params);

    const bookId = req.params.bookId;
    console.log(bookId);

    // Add a new book
    const book = await Book.findById({
        _id: bookId
    });

    if (!book) {
        return res.status(statusCodes.BAD_REQUEST).json({
            success: false,
            message: messages.BOOK_NOT_FOUND,
        });
    }

    return res.status(statusCodes.SUCCESS).json({
        success: true,
        data: book
    });
}