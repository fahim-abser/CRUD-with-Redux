import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./BooksSlice";
import { Link } from "react-router-dom";

const ShowBooks = () => {
  const books = useSelector((state) => state.booksReducer.books);

  const dispatch = useDispatch()
  const handleDeleteBook=(id)=>{
    dispatch(deleteBook(id));
  }
  
  return (
    <div className="text-center">
      <h2 className="text-3xl mt-5">List of Books</h2>
      <div className="mt-5">
      <table>
       <>
       <>
          <th className="border px-3">ID</th>
          <th className="border px-3">Title</th>
          <th className="border px-3">Author</th>
          <th className="border px-3">Action</th>
        </>
       </>
       <tbody>
        {books && books.map((book)=>{
          const {id, title, author}=book;
          return <tr key={id}>
            <td className="border px-3">{id}</td>
            <td className="border px-3">{title}</td>
            <td className="border px-3">{author}</td>
            <div  className="border px-3">
            <Link to="/edit-book" state={{id, title, author}}>
            <button className="px-3 bg-slate-400 mr-2">Edit</button>
            </Link>
            <button onClick={()=>handleDeleteBook(id)} className="px-3 bg-red-400">Delete</button>
            </div>
          </tr>
        })}
       </tbody>
      </table>
      </div>
    </div>
  );
};

export default ShowBooks;
