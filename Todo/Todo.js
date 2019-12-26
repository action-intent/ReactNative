import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TodoButton from './TodoButton'

const Todo = ({todo, toggleComplete, deleteTodo}) => (
    <View style = {styles.todoContainer}>
        <Text style = {styles.todoText}>
            {todo.title}
        </Text>
        <View style={styles.buttons}>
            <TodoButton
                name='Done'
                complete={todo.complete}
                onPress={() => toggleComplete(todo.todoIndex)} />
            <TodoButton
                name='Delete'
                onPress={() => deleteTodo(todo.todoIndex)} />
        </View>
    </View>
)
const styles = StyleSheet.create({
    todoContainer: {
        marginLeft:20,
        paddingLeft: 14,
        paddingTop: 7,
        paddingBottom: 7,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width:2, height:2 },
        backgroundColor: '#ffffff',
        marginRight: 20,
        borderWidth: 1,
        borderColor: '#ededed',
        alignItems: 'center',
        flexDirection: 'row'
    },
    todoText: {
        fontSize: 17
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})
export default Todo