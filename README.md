# BookStore - MERN Stack Backend

This repository contains the backend code for a simple bookstore application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. The backend provides CRUD (Create, Read, Update, Delete) operations for managing book records.

## Features

- **Create:** Add new books to the database with details such as title, author, and genre.
- **Read:** Retrieve book information including title, author, and genre from the database.
- **Update:** Modify existing book records, updating their details as needed.
- **Delete:** Remove books from the database.

## Technologies Used

- **MongoDB:** NoSQL database for storing book records.
- **Express.js:** Web application framework for Node.js used for building APIs.
- **Node.js:** JavaScript runtime for server-side development.
- **RESTful API:** Follows REST architectural style for communication.
- **Mongoose:** MongoDB object modeling for Node.js.
- **Cors:** Middleware for enabling Cross-Origin Resource Sharing.
- **Body-parser:** Middleware for parsing JSON data.

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/your-username/mern-stack-backend.git
   ```

2. Install dependencies:

   ```
   cd mern-stack-backend
   npm install
   ```

3. Set up the MongoDB connection:

   - Create a `.env` file in the root directory.
   - Add your MongoDB connection URI:

     ```
     MONGODB_URI=your_mongodb_connection_uri
     ```

4. Start the server:

   ```
   npm start
   ```

   The server will run on `http://localhost:5000`.

## API Endpoints

- **GET /books:** Get a list of all books.
- **GET /books/:id:** Get details of a specific book.
- **POST /books:** Add a new book to the database.
- **PUT /books/:id:** Update details of a specific book.
- **DELETE /books/:id:** Delete a specific book from the database.

## Contributing

Feel free to contribute by opening issues or creating pull requests. Your feedback and contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
