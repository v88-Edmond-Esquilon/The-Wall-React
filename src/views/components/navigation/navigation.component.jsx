/** React */
import React    from "react";
import { Link } from "react-router-dom";
/** CSS */
import "./navigation.component.less";

export default function Navigation() {
    return (
        <div id="nav_bar">
            <Link to="/" >The Wall Assignment</Link>
            <p>Welcome, Edmond Esquilon! <Link to="/" onClick={() => {}}>Log out</Link></p>
        </div>
    )
}
