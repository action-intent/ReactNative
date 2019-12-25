import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class LotsOfGreetings extends Component { //부모 Component export
  constructor(){
      super()
      this.state = {
          username: 'Rexxar'
      }
  }
  updateName(){
      this.setState({ username: 'Jaina'})
  }
  render() {  //name과 updateName을 props로 전달
    const { username } = this.state
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting 
          updateName={ () => this.updateName() }
          name= { username } /> 
      </View>
    );
  }
}

class Greeting extends Component { //자식 Component : props를 쓴다.
  render() {
    const { name, updateName } = this.props //props를 
    return (
      <View style={{alignItems: 'center'}}>
        <Text onPress={ updateName }> Hello {name}!</Text>
      </View>
    );
  }
}