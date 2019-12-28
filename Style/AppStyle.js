import React, { Component } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import getStyleSheet from './styles'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            darkTheme: false
        }
        this.toggleTheme = this.toggleTheme.bind(this);
    }
    
    toggleTheme(){  //버튼을 누를때 theme 값을 바꿔주는 함수
        this.setState({darkTheme: !this.state.darkTheme})
    }
    
    render(){
        const styles = getStyleSheet(this.state.darkTheme)
        const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor
        
        return ( //styles로 부터 스타일 속성을 적용
            <View style={styles.container}>  
                <View style={styles.box}>
                    <Button title={backgroundColor} onPress={this.toggleTheme} />
                </View>
            </View>
        )
    }
}