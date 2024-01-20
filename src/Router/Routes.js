import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Error from "../Components/Error";
import ShowBooks from "../Components/ShowBooks";
import AddBooks from "../Components/AddBooks";
import Main from "../Layout/Main";

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
                path:'/showBooks',
                element:<ShowBooks></ShowBooks>
            },
            {
                path:"*",
                element:<Error></Error>
            },
            {
                path:'/addBooks',
                element:<AddBooks></AddBooks>
            }
        ]
    }
])

export default router;