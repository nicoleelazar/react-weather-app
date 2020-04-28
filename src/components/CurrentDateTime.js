import React, { Component } from 'react'

export default class CurrentDateTime extends Component {

    buildDate = (rawTime, rawZone) => {
        let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let dateToday = new Date((rawTime + rawZone) * 1000)
        // let dateUtc = dateToday.toUTCString()
        let hourUtc = dateToday.getUTCHours()
        let minUtc = dateToday.getUTCMinutes()
        let dateUtc = dateToday.getUTCDate()
        let monthUtc = months[dateToday.getUTCMonth()]
        let dayUtc = days[dateToday.getUTCDay()]

        return `${dayUtc} ${dateUtc} ${monthUtc}, ${hourUtc}:${minUtc}`
    }

    render() {

        const { currentTime, timezone } = this.props

        return (
            <div>
                <div className="date">{this.buildDate(currentTime, timezone)} </div>

            </div>
        )
    }
}
