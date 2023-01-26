 const { response } = require("express");
const Book = require("../models/Book");
 const User = require("../models/User");

 const getAllBooks = async (req, res, next) => {
    let books;
    try{
        books = await Book.find();
    } catch (err) {
        console.log(err)
    }

    if (!books) {
        return res.status(404).json({ message: "No Products Found"});
    }
    return res.status(200).json({ books });
 };

const getById = async(req, res, next) => {
    
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "No Book Found"});
    }
    return res.status(200).json({ book });
    
};

const addBook = async (req, res, next) => {
    const {name, author, description, price, available, image} = req.body;
    let book;
    try {
        book= new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book.save();
    } catch (err) {
        console.log(err);
    }

    if (!book) {
        return res.status(500).json({message:'Unable to Add'})
    } 
    return res.status(201).json({ book });
};

const updateBook = async (req, res, next) => {
    const id = req.params.id;
    const { name, author, description, price, available, image} = req.body;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image
        });
        book = await book.save()              
    } catch(err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "Unable to Update by This ID"});
    }
    return res.status(200).json({ book });
};

const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndRemove(id);
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "Unable to Delete by This ID"});
    }
    return res.status(200).json({ message: "Product successfully deleted" });
    };

    const login = async (req, res) => {
        console.log(req.body)
        const data = await User.findOne({username:req.body.username,password:req.body.password})

       
       
        if (data){
          return  res.send({
                data
            })
        }else{
          return  res.send({
                code: 56
            })
        }
        
    }

    const signUp=async(req,resp)=>{
        const data=await User.create(req.body);

        resp.send({data})
    }


 exports.getAllBooks = getAllBooks;
 exports.addBook = addBook;
 exports.getById = getById;
 exports.updateBook = updateBook;
 exports.deleteBook = deleteBook;
 exports.login = login;
 exports.signUp=signUp