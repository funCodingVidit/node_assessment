import { Book } from '../models/book.js'
import { messages } from '../constants/messages.js'
import { statusCodes } from '../constants/statusCodes.js'

// <------------------ Add Book Controller ------------------>
export const addBookController = async (req, res) => {
    console.log("bookController");
    const { title, author, summary } = req.body;

    // Check if book already present in database
    const isBookAlreadyExists = await Book.findOne({ title });

    if (isBookAlreadyExists) {
        return res.status(statusCodes.BAD_REQUEST).json({
            success: false,
            message: messages.BOOK_ALREADY_EXISTS,
        });
    }

    // Add a new book
    const newBook = await Book.create({
        title,
        author,
        summary,
    });
    return res.status(statusCodes.SUCCESS).json({
        success: true,
        message: messages.BOOK_CREATED,
        data: newBook,
    });
}