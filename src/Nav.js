import React, { useState, useEffect } from 'react'
import './Nav.css';


function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://www.pinclipart.com/picdir/big/2-23236_transparent-netflix-logo-2018-clipart.png"
                art="Netflix Logo"
            />
            <img
                className="nav_avatar"
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                art="Netflix Logo"
            />
            
        </div>
    )
}

export default Nav
