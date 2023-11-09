import { Book } from '../models/book.js'
import { messages } from '../constants/messages.js'
import { statusCodes } from '../constants/statusCodes.js'

// <------------------ Update Book Controller ------------------>
export const updateBookController = async (req, res) => {
    const { title, author, summary } = req.body;
    const bookId = req.params.bookId;

    // Check if book present in database or not
    const isBookExists = await Book.findById({_id: bookId});

    if (!isBookExists) {
        return res.status(statusCodes.BAD_REQUEST).json({
            success: false,
            message: messages.BOOK_NOT_FOUND,
        });
    }

    // Add a new book
    const updateBook = await Book.findByIdAndUpdate(
        bookId,
        {$set: {title, author, summary}},
        {new: true}
        );
    return res.status(statusCodes.SUCCESS).json({
        success: true,
        message: messages.BOOK_UPDATED,
        data: updateBook,
    });
}