import React from 'react'
import { Text, StyleSheet, TouchableHighlight } from 'react-native'

const TodoButton = ({ onPress, complete, name }) => (
    <TouchableHighlight
        underlayColor='#efefef'
        onPress={onPress}
        style = {styles.button}>
        <Text style={[
            styles.text,
            complete ? styles.complete : null,
            name === 'Delete' ? styles.deleteButton : null ]}>
            {name}
        </Text>
    </TouchableHighlight>
)
const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        padding: 7,
        borderColor: '#ededed',
        marginRight: 5,
        borderWidth: 1,
        borderRadius: 5
    },
    text: {
        color: '#666666'
    },
    complete: {
        color: 'green',
        fontWeight: 'bold'
    },
    deleteButton: {
        color: 'rgba(175, 47,47,1)'
    }
})
export default TodoButton