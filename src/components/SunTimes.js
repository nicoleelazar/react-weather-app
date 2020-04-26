import React, { Component } from 'react'

export default class SunTimes extends Component {


    calcSunrise = (arg) => {
        let unixSunrise = arg
        let sunrise = new Date(unixSunrise * 1000)
        let sunriseHour = sunrise.getHours()
        let sunriseMin = sunrise.getMinutes()

        return `${sunriseHour} : ${sunriseMin}`

    }



    calcSunset = (arg) => {
        let unixSunset = arg
        //multiply by 1000 because unix is in seconds and JS uses milliseconds
        let sunset = new Date(unixSunset * 1000)
        let sunsetHour = sunset.getHours()
        let sunsetMin = sunset.getMinutes()

        return `${sunsetHour} : ${sunsetMin}`

    }

    render() {

        const { sunrise, sunset } = this.props

        return (
            <div>

                <div className="contain-flex-stats text-dark">
                    <div className="flex-item">
                        <div>Sunrise</div>
                        <div>{this.calcSunrise(sunrise)}</div>
                    </div>
                    <div className="flex-item">
                        <div>Sunset</div>
                        <div>{this.calcSunset(sunset)}</div>
                    </div>

                </div>


            </div>
        )
    }
}
