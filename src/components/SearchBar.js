import React, { Component } from 'react'

export default class SearchBar extends Component {



    render() {

        const { getWeather } = this.props

        return (
            <div>
                <form className="form" onSubmit={getWeather} >
                    {/* if using value on input below, need to also use an onChange event */}
                    <input className="search-bar" type="text" placeholder="Search a city" name="searchCity" >

                    </input>
                    <button className="search-icon" type="submit" ><i className="fas fa-search"></i></button>

                </form>
            </div>
        )
    }
}

