import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Weather from './pages/Weather'
import Zagreb from './pages/Zagreb'
import Split from './pages/Split'
import Osijek from './pages/Osijek'
import Rijeka from './pages/Rijeka'

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/weather" element={<Weather/>}/>
                <Route path="/zagreb" element={<Zagreb/>}/>
                <Route path="/split" element={<Split/>}/>
                <Route path="/osijek" element={<Osijek/>}/>
                <Route path="/rijeka" element={<Rijeka/>}/>
            </Routes>
        </Router>
    )
}

export default App;