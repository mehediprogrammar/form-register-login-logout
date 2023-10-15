import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Log/Login";
import Register from "../Pages/Register/Register";
import PrivetRout from "../PrivetRout/PrivetRout";
import Oder from "../Provite/Oder";



const myRouter = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/oder",
                element:<PrivetRout><Oder></Oder></PrivetRout>
            }
        ]
    }
])

export default myRouter;