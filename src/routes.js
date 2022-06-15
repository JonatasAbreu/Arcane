import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import App from './App'
import Login from "./container/Login";
import Register from "./container/Register";


function MyRoutes() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes