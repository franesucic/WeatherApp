import React, { Component } from 'react';
import logo from '../assets/CroWeather logo.png'
import {Link} from 'react-router-dom'

function Header() {

        return (
            <header>
                <span></span>
                <span><Link to="/" className="link">HOME</Link></span>
                <span><img src={ logo } alt="CroWeather logo" id="logo"></img></span>
                <span><Link to="/weather" className="link">WEATHER</Link></span>
                <span></span>
            </header>
        )
    }

export default Header;