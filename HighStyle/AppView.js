import React, { Component } from 'react'
import PropTypes from 'prop-types'
import update from 'immutability-helper'
import { Image, Platform, Button, StyleSheet, View, Text, TouchableHighlight } from 'react-native'

const userImage = require('./user.png')

const data = [{
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great JavaScript developer.',
    showThumbnail: true
}]

const ProfileCard = (props) => {
    const { image, name, occupation, description, onPress, showThumbnail } = props
    let containerStyles = [styles.cardContainer]
    if(showThumbnail){
        containerStyles.push(styles.cardThmbnail)
    }
    return (
        <TouchableHighlight onPress={onPress}>
            <View style={[containerStyles]}>  
                <View style={styles.cardImageContainer}>
                    <Image style={styles.cardImage} source={image} />
                </View>
                <View>
                    <Text style={styles.cardName}>
                        {name}
                    </Text>
                </View>
                <View style={styles.cardOccupationContainer}>
                    <Text style={styles.cardOccupation}>
                        {occupation}
                    </Text>
                </View>
                <View>
                    <Text style={styles.cardDescription}>
                        {description}
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

ProfileCard.propTypes = {
    image: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    showThumbnail: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
}

export default class App extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data: data
        }
    }
    
    handleProfileCardPress = (index) => {
        const showThumbnail = !this.state.data[index].showThumbnail
        this.setState({
            data: update(this.state.data, {[index]: {showThumbnail: {$set: showThumbnail}}})
        })
    }
    render(){
        const list = this.state.data.map(function(item, index){
            const { image, name, occupation, description, showThumbnail } = item;
            return <ProfileCard key={'card-' + index}
                                image={image}
                                name={name} 
                                occupation={occupation}
                                description={description}
                                onPress={this.handleProfileCardPress.bind(this, index)}
                                showThumbnail={showThumbnail}/>
        },this)
        return (
            <View style={styles.container}>
                {list}
            </View>
        );
    }
}

const profileCardColor = 'dodgerblue' //1. 배경색을 변수로 정의

const styles = StyleSheet.create({
    cardThumbnail: {
        transform: [{scale: 0.2}]
    },
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
       borderRadius: 20,
       ...Platform.select({
           ios: {
               shadowColor: 'black',
               shadowOffset: {
                   height: 10
               },
               shadowOpacity: 1
           },
           android: {
               elevation: 15
           }
       })
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
        paddingTop: 15,
        ...Platform.select({
           ios: {
               shadowColor: 'black',
               shadowOffset: {
                   height: 10
               },
               shadowOpacity: 1
           },
           android: {
               borderWidth:3,
               borderColor: 'black',
               elevation: 15
           }
       })
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

