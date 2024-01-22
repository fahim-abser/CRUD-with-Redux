import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        
       <div>
        <nav className="justify-center mt-5 flex gap-3 text-xl font-bold">
            <Link to='/' className="px-4  py-1 border rounded-md text-black bg-white hover:bg-black hover:text-white">Home</Link>
            <Link to='/show-books'className="px-4 py-1  border rounded-md text-black bg-white hover:bg-black hover:text-white">Show Books</Link>
            <Link to='/add-books' className="px-4  py-1 border rounded-md text-black bg-white hover:bg-black hover:text-white">Add Books</Link>
        </nav>
       </div>
    );
};

export default Navbar;