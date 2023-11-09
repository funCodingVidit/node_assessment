import mongoose from 'mongoose';
import config from '../config.js';

const { url } = config.db;

class Database {
    constructor() {
        this._connect();
    }
    _connect() {
        mongoose.connect(url, {
        }).then((result) => {
            console.log("===== Connected to MongoDB =====");
        }).catch((err) => {
            throw new Error("MongoDB Connection Error!", err);
        })
    }
}


export default new Database();

