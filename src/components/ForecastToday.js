import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SunTimes from './SunTimes'
import testpic from '../assets/testpic.png'

export default class ForecastToday extends Component {





    render() {
        return (
            <div>


                <SearchBar />

                <div className="contain-today-forecast">
                    <h1 className="heading-city">Sydney</h1>
                    <h4>Today</h4>
                    <div className="date">Tues 4 March, 14:00</div>

                    <div className="temp-main">20°c</div>

                    <div className="contain-flex-stats">
                        <img className="icon flex-item" src={testpic} alt="weather" />
                        <div className="icon-description flex-item">
                            <div>Sunny</div>
                            <div>Humidity: 80%</div>
                        </div>

                    </div>

                    <div className="contain-flex-stats text-dark">
                        <div className="flex-item">
                            {/* <i className="fas fa-arrow-down arrows" /> */}
                            <i className="fas fa-long-arrow-alt-down " />
                            <div>Min</div>
                            <div>16°c</div>
                        </div>
                        <div className="flex-item">
                            <i className="fas fa-long-arrow-alt-up" />
                            <div>Max</div>
                            <div>25°c</div>
                            {/* <i className="fas fa-arrow-up arrows" /> */}
                        </div>

                    </div>


                    <SunTimes />


                </div>

            </div>
        )
    }
}
