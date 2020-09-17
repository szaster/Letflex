import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
          if (window.scrolly > 100) {
            handleShow(true);
          } else handleShow(false);
        });
        return () => {
          window.removeEventListener('scroll');
        };
      }, []);
	return (
		<div className={`nav ${show && "nav_black"}`}>
			<a href='/'><img classNamee='logo' style={{width: '150px',}} src='../logo.png' alt='logo'></img></a>
			<a href='/'><img className='nav_avatar' src='../nav_avatar.png'></img></a>
		</div>
	);
}

export default Nav;
