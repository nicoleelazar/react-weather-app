import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <form className="form">
                    <input className="search-bar" type="text" placeholder="Search a city" />
                    <button className="search-icon"><i className="fas fa-search"></i></button>
                </form>
            </div>
        )
    }
}
