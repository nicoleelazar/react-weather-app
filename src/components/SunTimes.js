import React, { Component } from 'react'

export default class SunTimes extends Component {


    calcSunrise = () => {
        let unixSunrise = 1485762037
        let sunrise = new Date(unixSunrise * 1000)
        let sunriseHour = sunrise.getHours()
        let sunriseMin = sunrise.getMinutes()

        return `${sunriseHour} : ${sunriseMin}`

    }



    calcSunset = () => {
        let unixSunset = 1485794875
        let sunset = new Date(unixSunset * 1000)
        let sunsetHour = sunset.getHours()
        let sunsetMin = sunset.getMinutes()

        return `${sunsetHour} : ${sunsetMin}`

    }

    render() {
        return (
            <div>

                <div className="contain-flex-stats text-dark">
                    <div className="flex-item">
                        <div>Sunrise</div>
                        <div>{this.calcSunrise()}</div>
                    </div>
                    <div className="flex-item">
                        <div>Sunset</div>
                        <div>{this.calcSunset()}</div>
                    </div>

                </div>


            </div>
        )
    }
}
