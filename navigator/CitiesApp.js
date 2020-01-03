import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'

import Tabs from './index'
import AsyncStorage from '@react-native-community/async-storage'

const key = 'state'

const initialState = [{
    city: 'Paris',
    country: 'France',
    id: 0,
    locations: []
    },
    {
    city: 'Busan',
    country: 'Korea',
    id: 1,
    locations: []
}]

export default class App extends Component{
    state = {
        cities: []
    }

    async componentDidMount(){
        console.log("component did mount")
        try{
            let cities = await AsyncStorage.getItem(key)
            if(cities){
                cities = JSON.parse(cities)
                this.setState({cities})
            }
        } catch(e){
            console.log("error from AsyncStorage: ", e)
        }
    }
    addCity = (city) => {  //cities목록에 도시 추가
        const cities = this.state.cities
        cities.push(city)
        this.setState({ cities })
        AsyncStorage.setItem(key, JSON.stringify(cities))
            .then(() => console.log('storage updated!'))
            .catch(e => console.log('e: ', e))
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
        }, () => {
            AsyncStorage.setItem(key, JSON.stringify(cities))
                .then(() => console.log('storage updated!'))
                .catch(e => console.log('e: ', e))
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