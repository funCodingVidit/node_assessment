# node_assessment

# Setup Instructions
1. Run 'npm i' command to install all the dependencies used in the project
2. Then create a '.env' file at the root level to add 'NODE_ENV' variable as 'dev' and 'PORT' as 3000.
3. Run 'npm run dev' command in the terminal to check that the server is running or not.
4. Update the connection url with your local url to connect to mongodb present in the 'config.js' file.

# API Endpoints
1. View all Books list
   Endpoint - localhost:3000/api/v1/getAllBooks?limit=10&pageNumber=1
   Method - GET

3. View a book by ID
   Endpoint - localhost:3000/api/v1/getBookById/:bookId
   Method - GET

5. Add a new book
   Endpoint - localhost:3000/api/v1/addBook
   Method - POST
   Body data - {
    "title": "RUNWAY 34",
    "author": "Ajay Devgan",
    "summary": "Based on True events"
   }

7. Update a existing book
   Endpoint - localhost:3000/api/v1/updateBook/:bookId
   Method - PATCH
   Body data - {
    "title": "Hello Life",
    "author": "A.K Ronnin",
    "summary": "Looking at life with a totally different pov."
   }

8. Deleting a book
   Endpoint - localhost:3000/api/v1/deleteBook/:bookId
   Method - DELETE
