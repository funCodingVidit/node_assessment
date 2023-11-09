import cookieParser from 'cookie-parser';
import express from 'express'
import morgan from 'morgan';
import db from './db/db.js';
import routes from './routes/index.js'

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    const currentState = req.method + ' ' + res.statusCode + ' ' + req.url;
    console.log('API HIT -------------->', currentState, '\n|\nv\n|\nv\n');
    next();
});

app.use('/api', routes);

// Log the environment 
console.log(`Environment ===> ${process.env.NODE_ENV}`);

db._connect();

// This should be the last route else any after it won't work
app.use("*", (req, res) => {
    res.status(statusCodes.NOT_FOUND).json({
        success: false,
        message: messages.ROUTE_NOT_FOUND,
        error: {
            statusCode: statusCodes.NOT_FOUND,
            message: messages.ROUTE_NOT_FOUND,
        },
    });
});

// Handling the other errors
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message,
      error: {
        statusCode: err.statusCode || 500,
        message: "Server error",
      },
    });
  });
  
  // Server listener 
  app.listen(PORT,()=>{
    console.log(`Server is Up on port ===> ${PORT}`)
  })






