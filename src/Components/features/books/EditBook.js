import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './BooksSlice';

const EditBook = () => {
    const location = useLocation();
    const [id, setId]= useState(location.state.id)
    const [title, setTitle]= useState(location.state.title)
    const [author, setAuthor]= useState(location.state.author)
    const dispatch=useDispatch()
    const navigate= useNavigate()

    const handelUpdate=(e)=>{
        e.preventDefault()
        const data ={id, author, title}
        dispatch(updateBook(data))
        navigate("/show-books",{replace:true})
    }

    return (
        
        <div>
            <h2>Edit Book</h2>
            <form onSubmit={handelUpdate}>
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
        <button className="border px-2 border-black text-white mt-3 rounded-md bg-slate-400 hover:text-black" type="submit">Update Book</button>
      </form>
        </div>
    );
};

export default EditBook;