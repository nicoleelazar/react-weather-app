import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SunTimes from './SunTimes'
import CurrentDateTime from './CurrentDateTime'
import testpic from '../assets/testpic.png'

export default class ForecastToday extends Component {





    render() {

        const { city, temp, description, humidity, min, max, sunrise, sunset } = this.props

        return (
            <div>


                <SearchBar />

                <div className="contain-today-forecast">
                    <h1 className="heading-city">{city}</h1>
                    <h4>Today</h4>

                    <CurrentDateTime />

                    <div className="temp-main">{Math.round(temp)}°c</div>

                    <div className="contain-flex-stats">
                        <img className="icon flex-item" src={testpic} alt="weather" />
                        <div className="icon-description flex-item">
                            <div className="text-capitalise">{description}</div>
                            <div>Humidity: {humidity}%</div>
                        </div>

                    </div>

                    <div className="contain-flex-stats text-dark">
                        <div className="flex-item">
                            {/* <i className="fas fa-arrow-down arrows" /> */}
                            <i className="fas fa-long-arrow-alt-down " />
                            <div>Min</div>
                            <div>{Math.round(min)}°c</div>
                        </div>
                        <div className="flex-item">
                            <i className="fas fa-long-arrow-alt-up" />
                            <div>Max</div>
                            <div>{Math.round(max)}°c</div>
                            {/* <i className="fas fa-arrow-up arrows" /> */}
                        </div>

                    </div>


                    <SunTimes
                        sunrise={sunrise}
                        sunset={sunset}
                    />


                </div>

            </div>
        )
    }
}
