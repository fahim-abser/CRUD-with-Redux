import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error";
import Main from "../Layout/Main";
import Home from "../Components/features/books/Home";
import ShowBooks from "../Components/features/books/ShowBooks";
import AddBooks from "../Components/features/books/AddBooks";
import EditBook from "../Components/features/books/EditBook";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/show-books',
                element:<ShowBooks></ShowBooks>
            },
            {
                path:'/edit-book',
                element:<EditBook></EditBook>
            },
            {
                path:"*",
                element:<Error></Error>
            },
            {
                path:'/add-books',
                element:<AddBooks></AddBooks>
            }
        ]
    }
])

export default router;