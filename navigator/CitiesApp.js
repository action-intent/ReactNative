import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'

import Tabs from './index'

export default class App extends Component{
    state = {
        cities: []
    }
    addCity = (city) => {  //cities목록에 도시 추가
        const cities = this.state.Cities
        cities.push(city)
        this.setState({ cities })
    }
    addLocation = (location, city) => {  //도시의 장소 배열에 장소 추가
        const index = this.state.cities.findIndex(item => {
            return item.id === city.id
        })
        const chosenCity = this.state.cities[index]
        
        chosenCity.locations.push(location)
        const cities = [
            ...this.state.cities.slice(0, index),
            chosenCity,
            ...this.state.cities.slice(index +1)
        ]
        this.setState({
            cities
        })
    }
    render() {
        return (
            <Tabs
                screenProps={{
                cities: this.state.cities,
                addCity: this.addCity,
                addLocation: this.addLocation
            }}
            />
        )
    }
}