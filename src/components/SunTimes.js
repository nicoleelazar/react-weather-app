import React, { Component } from 'react'

export default class SunTimes extends Component {


    calcSunriseSunset = (rawSunTime, rawZone) => {
        //multiply by 1000 because unix is in seconds and JS uses milliseconds
        let sunTimeUtc = new Date((rawSunTime + rawZone) * 1000)
        let sunTimeHourUtc = sunTimeUtc.getUTCHours()
        let sunTimeMinUtc = sunTimeUtc.getUTCMinutes()

        return `${sunTimeHourUtc} : ${sunTimeMinUtc}`

    }


    render() {

        const { sunrise, sunset, timezone } = this.props

        return (
            <div>

                <div className="contain-flex-stats text-dark">
                    <div className="flex-item">
                        <div>Sunrise</div>
                        <div>{this.calcSunriseSunset(sunrise, timezone)}</div>
                    </div>
                    <div className="flex-item">
                        <div>Sunset</div>
                        <div>{this.calcSunriseSunset(sunset, timezone)}</div>
                    </div>

                </div>


            </div>
        )
    }
}
