import React from 'react';
import sunce from '../assets/sunce.png'
import oblak from '../assets/oblak.png'
import kisa from '../assets/kisa.png'
import munja from '../assets/munja.png'
import { useNavigate } from 'react-router-dom';

function Body() {

    let navigate = useNavigate();

        return (
            <div class="container">
                <div class="text-container">
                    <div class="text">
                        Welcome to our website! We have all of the important stats 
                        about the weather in Croatia. Covering big towns such as: Zagreb, Split, Rijeka and Osijek, you will be able to see
                        whatever is in your interest. We are pretty new in this story, since 2022. but we sure will keep developing. Enjoy!
                    </div>
                </div>
                <div class="images-container">
                    <img src={sunce} id="image" alt="sun"></img><img src={oblak} id="image" alt="cloud"></img>
                    <img src={kisa} id="image" alt="rain"></img><img src={munja} id="image" alt="thunder"></img>
                </div>
                <div class="button-div">
                    <button id="find-out-button" onClick={() => {
                        navigate('/weather');
                }}>FIND OUT</button>
                </div>
            </div>
        )
    }

export default Body;