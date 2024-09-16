import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App"
import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Sign from "./Sign";
import Login from "./Login";
import User from "./User";
import Data from "./context/Data";

const router= createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/Sign",
        element: <Sign />
    },
    {
        path: "/Login",
        element: <Login />
    },
    {
        path: "/:abc" ,
        element: <User />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Data>
    <RouterProvider router={router}/>
    </Data>
);