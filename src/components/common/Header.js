import React from 'react'
import { Link } from "react-router-dom";

const Header  = ({ title, subtitle, buttonText }) => (

            <header className="masthead">
            <div className="container">
            <div className="intro-text">
                <div className="intro-lead-in">{title}</div>
                <div className="intro-heading text-uppercase">{subtitle}</div>
                <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to="/services">{buttonText}</Link>
            </div>
            </div>
            </header>
);

export default Header;