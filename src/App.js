import React from 'react';
import './App.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ItemCard from "./components/ItemCard";

import completedTodo from "./actions/actionCompletedTodo";
import addTodo from "./actions/actionAddTodo"
import removeTodo from "./actions/actionRemoveTodo";

import {connect} from "react-redux";





function App(props) {
    let text;
    // Функции для галочки и обозначения завершённости элемента списка todo.
    let onCompletedTodo = (check, id) => {
        props.todoCompleted(check, id)
    }
    // Фукция для удаления из списка
    let onRemoveTodo = (id) => {
        props.todoRemove(id)
    }
    // Технически, мы вызываем из пропсов функции, передавая им данные.


    // Магия map вставляем в элемент все данные и рисуем новый массив этих элементов.
    let postElements = props.todo.map(p => <ItemCard
        key={p.id}
        id={p.id}
        text={p.text}
        completed={p.completed}
        check={onCompletedTodo}
        remove={onRemoveTodo}/>);
    // Check и remove это две функции мы их прокидываем через пропсы
    // и используем уже в ItemCard

    // Записываем в переменную весь текст
    function handler(event) {
        text = event.target.value;
    }
    // Убираем текст в input, если кликаем куда-либо.
    function handlerBlur(event) {
        event.target.value = '';
    }

    // Добавляем новый элемент в список todo.
    let onAddTodo = () => {
        if(text){
            props.addTodoFunction(text);
            text='';
        }
    }

    // Отрисовка
    return (
        <div className="App">
            <div className="TopField">
                <h1>Todo list</h1>
                <Form className="TextArea">
                    <Form.Control type="text" onBlur={handlerBlur} onChange={handler} placeholder="Захватить мир"/>
                </Form>
                <Button className="TextArea" onClick={onAddTodo} variant="success">Создать</Button>

            </div>
             {/*Собственно сами элементы списка.*/}
            <div className="CardField">{postElements}</div>

            <div>
                <h3>Баги</h3>
                <p>Не обнаружено</p>
            </div>
        </div>
    );
}

// Засовываем в пропсы состояние. Для нас важно поле todo.
function mapStateToProps(state) {
    return {
        todo: state.userInfo.todo,
    }
}
// Засовываем в пропсы диспатчи, с данными из функций, что вызывали выше.
function mapDispatchToProps(dispatch) {
    return {
        addTodoFunction: text => {
            dispatch(addTodo(text))
        },
        todoCompleted: (check, id) => {
            dispatch(completedTodo(check, id))
        },
        todoRemove: id => {
            dispatch(removeTodo(id))
        }
    }
}

// Оборачиваем нашу компоненту и подключаем к стору.
export default connect(mapStateToProps, mapDispatchToProps)(App);
