import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class MyComponent extends Component {
  constructor(){
    super()
    this.state = {
      year: 2018
    }
  }
  updateYear() {
    this.setState({
      year: 2019
    })
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text onPress={() => this.updateYear()}> The year is: { this.state.year}</Text>
      </View>
    );
  }
}