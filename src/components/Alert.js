import React, { Component } from 'react'

export default class Alert extends Component {
    render() {
        return (
            <div>
                <div className="alert-message">{this.props.alertMsg}</div>
            </div>
        )
    }
}
