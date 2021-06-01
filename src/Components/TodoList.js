import React, { Component } from 'react'
// TodoItem
import TodoItem from './TodoItem'
// import Item from './TodoItem'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                This is TodoList Component
                <TodoItem></TodoItem>
                {/* <Item></Item> */}
            </div>
        )
    }
}
