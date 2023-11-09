import joi from "joi";
import { statusCodes } from "../constants/statusCodes.js"
import { messages } from "../constants/messages.js"

// Define Joi schema for request parameters
const paramsSchema = joi.object({
    bookId: joi.string().hex().length(24).required(),
  });
  
  // Define joi schema for request body
  const bodySchema = joi.object({
    title: joi.string().min(3),
    author: joi.string().min(4),
    summary: joi.string().min(3),
  });

// <-------------------- Add validation for Book ------------------->
export const addBookValidation = (req, res, next) => {
    try {
        const schema = joi.object({
            title: joi.string().required().min(3),
            author: joi.string().required().min(4),
            summary: joi.string().required().min(3)
        });

        // Apply validation
        const isValid = schema.validate(req.body);

        // If the upcoming body data is not valid
        if (isValid.error) {
            return res.status(statusCodes.BAD_REQUEST).json({
                success: false,
                msg: messages.INVALID_DATA,
                error: isValid.error.details[0].message,
            });
        }
        next();
    } catch (error) {
        throw error;
    }
}

// <-------------------- Validation for Getting Book ------------------->
export const getBookValidation = (req, res, next) => {
    try {
        const schema = joi.object({
            bookId: joi.string().hex().length(24).required()
        });

        // Apply validation
        const isValid = schema.validate(req.params);

        // If the upcoming body data is not valid
        if (isValid.error) {
            return res.status(statusCodes.BAD_REQUEST).json({
                success: false,
                msg: messages.INVALID_DATA,
                error: isValid.error.details[0].message,
            });
        }
        next();
    } catch (error) {
        throw error;
    }
}

// <-------------------- Validation for Updating Book ------------------->
export const validateParamsForUpdate = (req,res,next) => {
    try {
        // Apply validation
        const isValid = paramsSchema.validate(req.params);
        // If the upcoming params data is not valid
        if (isValid.error) {
            return res.status(statusCodes.BAD_REQUEST).json({
                success: false,
                msg: messages.INVALID_DATA,
                error: isValid.error.details[0].message,
            });
        }
        next();
    } catch (error) {
        throw error;
    }
}
export const validateBookValidationForUpdate = (req, res, next) => {
    try {

        // Apply validation
        const isValid = bodySchema.validate(req.body);

        // If the upcoming body data is not valid
        if (isValid.error) {
            return res.status(statusCodes.BAD_REQUEST).json({
                success: false,
                msg: messages.INVALID_DATA,
                error: isValid.error.details[0].message,
            });
        }
        next();
    } catch (error) {
        throw error;
    }
}