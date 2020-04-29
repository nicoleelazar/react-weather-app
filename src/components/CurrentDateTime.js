import React, { Component } from 'react'

export default class CurrentDateTime extends Component {

    buildDate = (rawZone) => {
        let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let rawZoneMillisec = rawZone * 1000
        let currentMillisec = new Date().getTime()
        let dateToday = new Date(currentMillisec + rawZoneMillisec)
        // let dateUtc = dateToday.toUTCString()
        let hourUtc = dateToday.getUTCHours()
        let minUtc = dateToday.getUTCMinutes()
        let dateUtc = dateToday.getUTCDate()
        let monthUtc = months[dateToday.getUTCMonth()]
        let dayUtc = days[dateToday.getUTCDay()]

        if (hourUtc < 10) {
            hourUtc = `0${hourUtc}`
        }
        if (minUtc < 10) {
            minUtc = `0${minUtc}`
        }

        return `${dayUtc} ${dateUtc} ${monthUtc}, ${hourUtc}:${minUtc}`
    }

    render() {

        const { timezone } = this.props

        return (
            <div>
                <div className="date">{this.buildDate(timezone)} </div>

            </div>
        )
    }
}
