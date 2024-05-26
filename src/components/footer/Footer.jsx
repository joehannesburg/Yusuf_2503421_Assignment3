import React from "react";
import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Yusuf Hassen. All rights reserved.</p>
        </footer>
    );
}

export default Footer;