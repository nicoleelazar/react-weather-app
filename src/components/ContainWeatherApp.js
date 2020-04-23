import React, { Component } from 'react'
import ForecastToday from './ForecastToday'
import ForecastFuture from './ForecastFuture'

export default class ContainWeatherApp extends Component {
    render() {
        return (
            <div>
                hello from ContainWeatherApp

                <ForecastToday />
                <ForecastFuture />
            </div>
        )
    }
}


