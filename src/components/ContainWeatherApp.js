import React, { Component } from 'react'
import axios from 'axios'
import ForecastToday from './ForecastToday'
import nightImg from '../assets/night.jpg'
import dayImg from '../assets/day.jpg'

// import ForecastFuture from './ForecastFuture'

const client = {
    APP_KEY: process.env.REACT_APP_APP_KEY
}


export default class ContainWeatherApp extends Component {
    constructor(props) {
        super(props)

        // this.state = {

        // }
    }

    // getWeather = () => {
    //     let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&units=metric&appid=${client.APP_KEY}`
    //     axios
    //         .get(weatherUrl)
    //         .then(response => {
    //             return response.data
    //         })
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(error => {
    //             if (error) {
    //                 console.log('Cannot get data from weather API', error)
    //             }
    //         })

    // }

    // componentDidMount() {

    //     this.getWeather()

    // }



    render() {
        // and add the img in :after
        // className={`contain-app ${time > 16 ? 'night-time' : 'day-time'}`}

        return (
            <div className="contain-app" >
                <div className="day-time"></div>
                <ForecastToday />
            </div>
        )
    }
}


