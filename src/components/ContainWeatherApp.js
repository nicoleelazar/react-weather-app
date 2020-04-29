import React, { Component } from 'react'
import axios from 'axios'
import ForecastToday from './ForecastToday'

// import ForecastFuture from './ForecastFuture'


// axios.get('http://google.com')
//   .then((res) => {
//     // do something with Google res

//     return axios.get('http://apple.com');
//   })
//   .then((res) => {
//     // do something with Apple res
//   })
//   .catch((err) => {
//     // handle err
//   });






const client = {
    APP_KEY: process.env.REACT_APP_APP_KEY
}


export default class ContainWeatherApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            alerting: true,
            alertMsg: "Search a city name",
        }
    }

    getWeather = (e) => {

        e.preventDefault()
        const searchCity = e.target.elements.searchCity.value

        let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=${client.APP_KEY}`

        if (searchCity !== "") {


            axios
                .get(weatherUrl)

                .then(res => {
                    let caseInsensitive = new RegExp(searchCity, 'i')

                    if (caseInsensitive.test(res.data.name)) {

                        this.setState({
                            alerting: false,
                            alertMsg: ""
                        })

                        this.setState({
                            city: res.data.name,
                            temp: res.data.main.temp,
                            description: res.data.weather[0].description,
                            humidity: res.data.main.humidity,
                            min: res.data.main.temp_min,
                            max: res.data.main.temp_max,
                            sunrise: res.data.sys.sunrise,
                            sunset: res.data.sys.sunset,
                            timezone: res.data.timezone,
                            icon: res.data.weather[0].icon,
                            id: res.data.id,

                        })

                        console.log('data retrieved')
                    }


                })
                .catch(error => {
                    if (error) {
                        this.setState({
                            alerting: true,
                            alertMsg: "City not found"
                        })

                        console.log('Cannot get data from weather API', error)
                    }
                })


        }
        else {
            this.setState({
                alerting: true,
                alertMsg: "Search a city name"
            })
        }

    }





    // change background image according to time of day
    dayOrNight = () => {
        // return new Date().getHours()

        if (this.state.alerting) {
            return
        }

        else {

            let rawZoneMillisec = this.state.timezone * 1000
            let currentMillisec = new Date().getTime()
            let dateToday = new Date(currentMillisec + rawZoneMillisec)
            let hourUtc = dateToday.getUTCHours()

            console.log(hourUtc)

            return hourUtc

        }

    }




    render() {


        return (
            <div className="contain-app" >
                <div className={this.state.alerting ? 'alerting' : null}></div>
                <div className={this.dayOrNight() > 5 && this.dayOrNight() < 18 ? 'day-time' : 'night-time'}></div>

                <div className="contentAll">
                    <ForecastToday
                        city={this.state.city}
                        temp={this.state.temp}
                        description={this.state.description}
                        humidity={this.state.humidity}
                        min={this.state.min}
                        max={this.state.max}
                        sunrise={this.state.sunrise}
                        sunset={this.state.sunset}
                        timezone={this.state.timezone}
                        icon={this.state.icon}
                        key={this.state.id}
                        getWeather={this.getWeather}
                        alert={this.state.alerting}
                        alertMsg={this.state.alertMsg}
                    />

                </div>


            </div>
        )
    }
}


