import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./BooksSlice";
import { useNavigate } from "react-router-dom";

const AddBooks = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");


  const numberOfBooks = useSelector((state) => state.booksReducer.books.length);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const book = { title, author, id: numberOfBooks + 1 };
    dispatch(addBook(book));
    navigate('/show-books', {replace:true})
  };

  return (
    <div>
      <h2 className="text-3xl">Add Books</h2>
      <form onSubmit={handelSubmit}>
        <div className="mt-5">
          <label htmlFor="title">Title:</label>
          <input
            className="border ms-3 border-black rounded-md"
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mt-5">
          <label htmlFor="author">Author:</label>
          <input
            className="border ms-3 border-black rounded-md"
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button className="border px-2 border-black text-white mt-3 rounded-md bg-slate-400 hover:text-black" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBooks;
