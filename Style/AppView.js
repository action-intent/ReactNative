import React, { Component } from 'react'
import { Image, Button, StyleSheet, View, Text } from 'react-native'

export default class App extends Component {
    render(){
        return ( 
            <View style={styles.container}>  
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image style={styles.cardImage} source={require('./user.png')} />
                    </View>
                    <View>
                        <Text style={styles.cardName}>
                            Jone Doe
                        </Text>
                    </View>
                    <View style={styles.cardOccupationContainer}>
                        <Text style={styles.cardOccupation}>
                            React Native Developer
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.cardDescription}>
                            John is a really great JavaScript developer.
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const profileCardColor = 'dodgerblue' //1. 배경색을 변수로 정의

const styles = StyleSheet.create({
   container: {
        flex: 1,    
        justifyContent: 'center',   
        alignItems: 'center'    
   },

   cardContainer: {
       alignItems: 'center',
       backgroundColor: profileCardColor,
       height: 400,
       width: 300,
       borderLeftWidth: 3,
       borderColor: 'black',
       borderWidth: 3,
       borderStyle: 'solid',
       borderRadius: 20
   },
    
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 15
    },
    cardImage: {
        width: 80,
        height: 80
    },
    cardName:{
        color: 'white',
        marginTop: 30,
        fontSize: 24,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: {height:2, width:2},
        textShadowRadius: 3
    },
    cardOccupationContainer:{
        borderColor: 'black',
        borderBottomWidth: 3
    },
    cardOccupation: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    },
    cardDescription: {
        fontStyle: 'italic',
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10
    }
})

