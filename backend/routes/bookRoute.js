import express from "express";
import { Book } from "../models/bookModel.js";

const booksRoutes = express.Router();
// route for get all books form database
booksRoutes.get('/', async (request, response) => {
  try {
    response.setHeader('Content-Type', 'application/json');
    const books = await Book.find({});
    return response.status(200).json({
      // count: books.length, // make object to count
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// route for get one book form database by id
booksRoutes.get('/:id', async (request, response) => {
  const id= req.params.id;
  if (!isValidResource(id)) {
    const error = new Error('Resource not found');
    error.status = 404;
    error.code = 'ResourceNotFound';
    error.details = `Resource with id ${id} does not exist.`;
    return next(error);
  }
    
    const book = await Book.findById(id);
    return response.status(200).json(book);

  
});

// route for update a book
booksRoutes.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "send all required fields: title, author, publishYear",
      });
    }
    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).send({ message: "book not found" });
    }
    return response.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// route for delete one book form database by id
booksRoutes.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).send({ message: "book not found" });
    }
    return response
      .status(200)
      .send({ message: `${id} book is deleted successfully` });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// route for save a new book
booksRoutes.post('/', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "send all required fields: title, author, publishYear",
      });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
      imgUrl: request.body.imgUrl
    };

    const book = await Book.create(newBook);
    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default booksRoutes;
