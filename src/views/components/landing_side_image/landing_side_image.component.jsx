import React from "react";
import { useLocation } from "react-router-dom";
import PersonImage from "../../../assets/images/the_wall_person.svg";
import "./landing_side_image.component.less";


export default function LandingPageSideImage() {
    const location = useLocation();
    const is_wall_dashboard = location.pathname === '/wall_dashboard';

    return (
        <div className={`image_container ${ is_wall_dashboard? "inactive_container" : ""}`}>
            <img src={PersonImage} alt="Person standing holding a paper vector art" />
        </div>
    )
}
