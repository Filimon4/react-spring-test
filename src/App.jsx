import React from "react";
import "./App.css";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import Corousel from './courusel'
import HomePage from "./pages/HomePage";
import Numbers from "./parallaxNumbers/Numbers";
import Earth from "./parallaxEarth/Earth";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppRouter />,
        errorElement: <div>404 Error Element</div>,
        children: [
            {
                path: '/courusel',
                element: <Corousel />,
            },
            {
                path: '/numbers',
                element: <Numbers />
            },
            {
                path: '/earth',
                element: <Earth />
            },
            {
                path: '/home',
                element: <HomePage />
            }
        ]
    },
])

const App = () => {

    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
};

export default App;
