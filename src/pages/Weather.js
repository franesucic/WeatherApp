import React, { Component } from 'react';
import './Weather.css'
import Header from '../components/header'
import Footer from '../components/footer'
import WeatherBody from '../components/weatherBody'

function Weather() {
    return (
        <React.Fragment>
            <Header/>
            <WeatherBody/>
            <Footer/>
        </React.Fragment>
    );
}

export default Weather;