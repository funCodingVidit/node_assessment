import mongoose from "mongoose";
const {model,Schema} = mongoose;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true
});

export const Book = model("book", BookSchema);