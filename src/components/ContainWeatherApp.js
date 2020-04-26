import React, { Component } from 'react'
import axios from 'axios'
import ForecastToday from './ForecastToday'

// import ForecastFuture from './ForecastFuture'

const client = {
    APP_KEY: process.env.REACT_APP_APP_KEY
}


export default class ContainWeatherApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            city: "",
            temp: undefined,
            description: "",
            humidity: undefined,
            min: undefined,
            max: undefined,
            sunrise: undefined,
            sunset: undefined,
            id: undefined
        }
    }

    getWeather = () => {
        let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&units=metric&appid=${client.APP_KEY}`
        axios
            .get(weatherUrl)
            .then(response => {
                return response.data
            })
            .then(data => {
                this.setState({
                    city: data.name,
                    temp: data.main.temp,
                    description: data.weather[0].description,
                    humidity: data.main.humidity,
                    min: data.main.temp_min,
                    max: data.main.temp_max,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                    id: data.id
                })


            })
            .catch(error => {
                if (error) {
                    console.log('Cannot get data from weather API', error)
                }
            })

    }

    componentDidMount() {
        this.getWeather()
    }


    // change background image according to time of day
    DayOrNight = () => {
        return new Date().getHours()
    }



    render() {

        return (
            <div className="contain-app" >
                <div className={this.DayOrNight() > 18 ? 'night-time' : 'day-time'}></div>
                <ForecastToday
                    city={this.state.city}
                    temp={this.state.temp}
                    description={this.state.description}
                    humidity={this.state.humidity}
                    min={this.state.min}
                    max={this.state.max}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    key={this.state.id}
                />
            </div>
        )
    }
}


