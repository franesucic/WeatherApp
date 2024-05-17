import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import { useState } from 'react';
import './City.css'
import TempChart from '../components/tempChart.js'
import FallChart from '../components/fallChart.js'

function Rijeka() {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [weather, setWeather] = useState();
    const [first, setFirst] = useState();
    const [second, setSecond] = useState();
    const [userData, setUserData] = useState({});
    const [userData2, setUserData2] = useState({});

    const handleWholeYear = async (e) => {
        let response = await fetch('http://localhost:3000/all/Rijeka');
        let jsonData = await response.json();
        setUserData({
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [
                {
                    label: "Temperature in ºC",
                    data: jsonData.map(elem => elem.prosTemp),
                    borderColor: "black",
                    borderWidth: 1,
                    backgroundColor: "rgba(217, 98, 98, 0.597)"
                },
            ], 
        })
        setUserData2({
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [
                {
                    label: "Percipitation in mm",
                    data: jsonData.map(elem => elem.kolicPad),
                    borderColor: "black",
                    borderWidth: 1,
                    backgroundColor: "rgba(131, 131, 248, 0.743)"
                },
            ], 
        })
        setWeather(jsonData);
        setFirst("")
        setSecond("")
        setShow2(false)
        setShow3(false)
        setShow1(true);
    }

    const handleFirstHalf = async (e) => {
        let response = await fetch('http://localhost:3000/firstSix/Rijeka');
        let jsonData = await response.json();
        setUserData({
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
                {
                    label: "Temperature in ºC",
                    data: jsonData.map(elem => elem.prosTemp),
                    borderColor: "black",
                    borderWidth: 1,
                    backgroundColor: "rgba(217, 98, 98, 0.597)"
                },
            ], 
        })
        setUserData2({
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
                {
                    label: "Percipitation in mm",
                    data: jsonData.map(elem => elem.kolicPad),
                    borderColor: "black",
                    borderWidth: 1,
                    backgroundColor: "rgba(131, 131, 248, 0.743)"
                },
            ], 
        })
        setFirst(jsonData);
        setWeather("")
        setSecond("")
        setShow1(false)
        setShow3(false)
        setShow2(true);
    }

    const handleSecondHalf = async (e) => {
        let response = await fetch('http://localhost:3000/lastSix/Rijeka');
        let jsonData = await response.json();
        setUserData({
            labels: ["July", "August", "September", "October", "November", "December"],
            datasets: [
                {
                    label: "Temperature in ºC",
                    data: jsonData.map(elem => elem.prosTemp),
                    borderColor: "black",
                    borderWidth: 1,
                    backgroundColor: "rgba(217, 98, 98, 0.597)"
                },
            ], 
        })
        setUserData2({
            labels: ["July", "August", "September", "October", "November", "December"],
            datasets: [
                {
                    label: "Percipitation in mm",
                    data: jsonData.map(elem => elem.kolicPad),
                    borderColor: "black",
                    borderWidth: 1,
                    backgroundColor: "rgba(131, 131, 248, 0.743)"
                },
            ], 
        })
        setSecond(jsonData);
        setFirst("")
        setWeather("")
        setShow1(false)
        setShow2(false)
        setShow3(true);
    }

    return(
        <React.Fragment>
            <Header/>
                <div className="city-body">
                    <form className="city-label2">
                        <span>Rijeka, Croatia</span><div className="arrays"><span onClick={handleWholeYear} style={{backgroundColor: show1 ? "antiquewhite" : ""}}>Whole 2022 </span><span onClick={handleFirstHalf} style={{backgroundColor: show2 ? "antiquewhite" : ""}}>First 6 months </span><span onClick={handleSecondHalf} style={{backgroundColor: show3 ? "antiquewhite" : ""}}>Last 6 months </span></div>
                    </form>
                    <div className="graph-container">
                        {show1 ? <React.Fragment><div className="graph"><TempChart chartData={userData} /></div><div className="graph"><FallChart chartData={userData2} /></div></React.Fragment> : ""}
                        {show2 ? <React.Fragment><div className="graph"><TempChart chartData={userData} /></div><div className="graph"><FallChart chartData={userData2} /></div></React.Fragment>: ""}
                        {show3 ? <React.Fragment><div className="graph"><TempChart chartData={userData} /></div><div className="graph"><FallChart chartData={userData2} /></div></React.Fragment>: ""}
                    </div>
                    {weather ?
                    <div className="table-container">
                        <table>
                            <thead>
                                <td>Month</td><td>Avg. temperature</td><td>Avg. precipitation</td><td>No. sunny days</td><td>No. rainy days</td>
                            </thead>
                            <tr>
                                <td>January</td><td>{weather[0].prosTemp} ºC</td><td>{weather[0].kolicPad} mm</td><td>{weather[0].
                                suncanihDana}</td><td>{weather[0].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>February</td><td>{weather[1].prosTemp} ºC</td><td>{weather[1].kolicPad} mm</td><td>{weather[1].
                                suncanihDana}</td><td>{weather[1].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>March</td><td>{weather[2].prosTemp} ºC</td><td>{weather[2].kolicPad} mm</td><td>{weather[2].
                                suncanihDana}</td><td>{weather[2].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>April</td><td>{weather[3].prosTemp} ºC</td><td>{weather[3].kolicPad} mm</td><td>{weather[3].
                                suncanihDana}</td><td>{weather[3].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>May</td><td>{weather[4].prosTemp} ºC</td><td>{weather[4].kolicPad} mm</td><td>{weather[4].
                                suncanihDana}</td><td>{weather[4].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>June</td><td>{weather[5].prosTemp} ºC</td><td>{weather[5].kolicPad} mm</td><td>{weather[5].
                                suncanihDana}</td><td>{weather[5].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>July</td><td>{weather[6].prosTemp} ºC</td><td>{weather[6].kolicPad} mm</td><td>{weather[6].
                                suncanihDana}</td><td>{weather[6].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>August</td><td>{weather[7].prosTemp} ºC</td><td>{weather[7].kolicPad} mm</td><td>{weather[7].
                                suncanihDana}</td><td>{weather[7].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>September</td><td>{weather[8].prosTemp} ºC</td><td>{weather[8].kolicPad} mm</td><td>{weather[8].
                                suncanihDana}</td><td>{weather[8].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>October</td><td>{weather[9].prosTemp} ºC</td><td>{weather[9].kolicPad} mm</td><td>{weather[9].
                                suncanihDana}</td><td>{weather[9].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>November</td><td>{weather[10].prosTemp} ºC</td><td>{weather[10].kolicPad} mm</td><td>{weather[10].
                                suncanihDana}</td><td>{weather[10].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>December</td><td>{weather[11].prosTemp} ºC</td><td>{weather[11].kolicPad} mm</td><td>{weather[11].
                                suncanihDana}</td><td>{weather[11].kisnihDana}</td>
                            </tr>
                        </table>
                    </div> : "" }
                    {first ?
                    <div className="table-container">
                        <table>
                            <thead>
                                <td>Month</td><td>Avg. temperature</td><td>Avg. precipitation</td><td>No. sunny days</td><td>No. rainy days</td>
                            </thead>
                            <tr>
                                <td>January</td><td>{first[0].prosTemp} ºC</td><td>{first[0].kolicPad} mm</td><td>{first[0].
                                suncanihDana}</td><td>{first[0].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>February</td><td>{first[1].prosTemp} ºC</td><td>{first[1].kolicPad} mm</td><td>{first[1].
                                suncanihDana}</td><td>{first[1].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>March</td><td>{first[2].prosTemp} ºC</td><td>{first[2].kolicPad} mm</td><td>{first[2].
                                suncanihDana}</td><td>{first[2].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>April</td><td>{first[3].prosTemp} ºC</td><td>{first[3].kolicPad} mm</td><td>{first[3].
                                suncanihDana}</td><td>{first[3].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>May</td><td>{first[4].prosTemp} ºC</td><td>{first[4].kolicPad} mm</td><td>{first[4].
                                suncanihDana}</td><td>{first[4].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>June</td><td>{first[5].prosTemp} ºC</td><td>{first[5].kolicPad} mm</td><td>{first[5].
                                suncanihDana}</td><td>{first[5].kisnihDana}</td>
                            </tr>
                        </table>
                    </div> : "" }
                    {second ?
                    <div className="table-container">
                        <table>
                            <thead>
                                <td>Month</td><td>Avg. temperature</td><td>Avg. precipitation</td><td>No. sunny days</td><td>No. rainy days</td>
                            </thead>
                            <tr>
                                <td>July</td><td>{second[0].prosTemp} ºC</td><td>{second[0].kolicPad} mm</td><td>{second[0].
                                suncanihDana}</td><td>{second[0].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>August</td><td>{second[1].prosTemp} ºC</td><td>{second[1].kolicPad} mm</td><td>{second[1].
                                suncanihDana}</td><td>{second[1].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>September</td><td>{second[2].prosTemp} ºC</td><td>{second[2].kolicPad} mm</td><td>{second[2].
                                suncanihDana}</td><td>{second[2].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>October</td><td>{second[3].prosTemp} ºC</td><td>{second[3].kolicPad} mm</td><td>{second[3].
                                suncanihDana}</td><td>{second[3].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>November</td><td>{second[4].prosTemp} ºC</td><td>{second[4].kolicPad} mm</td><td>{second[4].
                                suncanihDana}</td><td>{second[4].kisnihDana}</td>
                            </tr>
                            <tr>
                                <td>December</td><td>{second[5].prosTemp} ºC</td><td>{second[5].kolicPad} mm</td><td>{second[5].
                                suncanihDana}</td><td>{second[5].kisnihDana}</td>
                            </tr>
                        </table>
                    </div> : "" }
                </div>
            <Footer/>
        </React.Fragment>
    );
}

export default Rijeka;