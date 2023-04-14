import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { RegisterForm, LoginForm, WallDashboard } from "./views/pages";
import PersonImage from "./assets/images/the_wall_person.svg";
import "./App.less";


export default function App() {

    const ImageContainer = () => {
        const location = useLocation();
        const is_wall_dashboard = location.pathname === '/wall_dashboard';
      
        return (
            <div className={is_wall_dashboard ? "image_container inactive_container" : "image_container"}>
                <img src={PersonImage} alt="Person standing holding a paper vector art" />
            </div>
        );
    }
    
    return (
        <div id="wrapper">
            <Router>
                <Routes>
                    <Route path="/" element={  <LoginForm/> }/>
                    <Route path="/register" element={ <RegisterForm/> }/>
                    <Route path="/wall_dashboard" element={ <WallDashboard/> }/>
                </Routes>
                <ImageContainer/>
            </Router>
        </div>
    )
}
