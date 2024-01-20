import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        
       <div>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/addBooks'>Add Books</Link>
            <Link to='/showBooks'>Show Books</Link>
        </nav>
       </div>
    );
};

export default Navbar;