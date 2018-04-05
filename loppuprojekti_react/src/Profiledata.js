import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import chart from './chart.png';

import NaviWhenLoggedIn from "./NaviWhenLoggedIn";
import { LineChart, PieChart, AreaChart, DoughnutChart } from 'react-chartkick';
import Chart from '../node_modules/chart.js/src/chart'
window.Chart = require('../node_modules/chart.js/src/chart');



//alustetaan Dataa graafia varten, tämä on RAAKADATAA ja korvataan myöhemmin tietokantadatalla @Renne
var data = [
    {"name":"Paino", "data": {"2017-01-01": 99, "2017-01-02": 98.5, "2017-01-03": 98.75,"2017-01-04": 98, "2017-01-06": 98,"2017-01-07": 98.2, "2017-01-08": 95, "2017-01-09": 96.5, "2017-01-10": 99, "2017-01-11": 98.5, "2017-01-12": 98.75,"2017-01-13": 98, "2017-01-14": 98,"2017-01-17": 98.2, "2017-01-21": 95, "2017-01-22": 96.5}},
    {"name":"PainoKA", "data": {"2017-01-01": 99.5, "2017-01-02": 99.25, "2017-01-03": 99.12,"2017-01-04": 98.75, "2017-01-06": 98.5,"2017-01-07": 98.4, "2017-01-08": 97.5, "2017-01-09": 97.2}}
];

class Profiledata extends Component {
    render() {
        return (
            <div>
                <nav className="Navi">
                    <NaviWhenLoggedIn{...this.props}/>
                </nav>
                    {/*@Renne TÄssä luodaan Chart.js:n avulla kivoja graafeja!*/}
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <LineChart width="40%" xtitle="Time" ytitle="Weight" min={90} max={100} data={data}  />
                    </div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <PieChart donut={true} max={100} data={[["Steps", 8544], ["Steps from goal", 1456]]}  />
                    </div>
            </div>

        );
    }
}

export default Profiledata;