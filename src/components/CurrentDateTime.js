import React, { Component } from 'react'

export default class CurrentDateTime extends Component {

    buildDate = () => {
        let dateToday = new Date()
        let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


        let day = days[dateToday.getDay()]
        let month = months[dateToday.getMonth()]
        let date = dateToday.getDate()
        // let year = dateToday.getFullYear()
        let hours = dateToday.getHours()
        let minute = dateToday.getMinutes()

        return `${day} ${date} ${month}, ${hours}:${minute}`
    }

    render() {
        return (
            <div>
                <div className="date">{this.buildDate()} </div>

            </div>
        )
    }
}
