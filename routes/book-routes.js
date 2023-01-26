const express = require('express');
const router = express.Router();
const Book = require("../models/Book");
const booksController = require("../controllers/books-controller");

router.get("/" ,booksController.getAllBooks);
router.post("/",booksController.addBook);
router.get("/:id",booksController.getById);
router.put("/:id",booksController.updateBook);
router.delete("/:id",booksController.deleteBook);
router.post("/user/login", booksController.login);
router.post("/user/signup",booksController.signUp);

module.exports =  router;
//27 15