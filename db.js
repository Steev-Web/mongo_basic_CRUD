// connection to mongodb database

// import mongoose from 'mongoose'; //es6 module system

const mongoose = require('mongoose'); //commonjs module system - default in nodejs


require('dotenv').config();

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGOATLAS_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exit process with failure
    }

}

module.exports = {connectDB, mongoose }; //commonjs module system - default in nodejs

// export {connectDB, mongoose }; //es6 module system