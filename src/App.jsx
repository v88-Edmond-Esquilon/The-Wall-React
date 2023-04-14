import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { 
        RegisterForm,
        LoginForm,
        WallDashboard
    } from "./views/pages";
import "./App.less";


export default function App() {
    return (
        <div id="wrapper">
            <Router>
                <Routes>
                    <Route path="/" element={  <LoginForm/> }/>
                    <Route path="/register" element={ <RegisterForm/> }/>
                    <Route path="/wall_dashboard" element={ <WallDashboard/> }/>
                </Routes>
            </Router>
        </div>
    )
}
