import React from 'react';
import './App.css';
import Form from "react-bootstrap/Form";
import ItemCard from "./components/ItemCard";

import addTodo from "./actions/actionAddTodo"

import { connect } from "react-redux";
import completedTodo from "./actions/actionCompletedTodo";
import removeTodo from "./actions/actionRemoveTodo";


function App(props) {
    let text;

    let onCompletedTodo=(check,id)=>{
        props.todoCompleted(check,id)
    }
    let onRemoveTodo=(id)=>{
        props.todoRemove(id)
    }
    let postElements = props.todo.map(p => <ItemCard
        key={p.id}
        id={p.id}
        text={p.text}
        completed={p.completed}
        check={onCompletedTodo}
        remove={onRemoveTodo}/>);

    function handler(event) {
        text=event.target.value;
    }
    let onAddTodo=()=>{
        props.addTodoFunction(text)
    }


    return (
        <div className="App">
            <h1>Todo list</h1>
            <Form className="TextArea">
                <Form.Control type="text"  onChange={handler} placeholder="Захватить мир"/>
            </Form>
            <button className="TextArea" onClick={onAddTodo}>Создать</button>
            {postElements}

        </div>
    );
}

function mapStateToProps(state) {
    console.log(state.userInfo);
    return {
        todo: state.userInfo.todo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodoFunction: text => {
            dispatch(addTodo(text))
        },
        todoCompleted: (check,id) => {
            dispatch(completedTodo(check,id))
        },
        todoRemove: id => {
            dispatch(removeTodo(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
