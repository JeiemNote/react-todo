import React from 'react';
import './ItemCard.css';
import Form from "react-bootstrap/Form";
import {ReactComponent as Trash} from "./Trash.svg"

function ItemCard(props) {
    function handler(event) {
        let check;
        event.target.checked ? check = true : check = false
        props.check(check, props.id)
    }

    function handlerRemove() {
        props.remove(props.id)
    }

    return (
        <div className="Card">
            <Form.Check aria-label="option 1" onChange={handler}/>
            <div className={props.completed ? "CompletedCard" : "LabelCard"}>{props.text}</div>
            <button className="TrashButton" onClick={handlerRemove}>
                <Trash/>
            </button>
        </div>
    );
}

export default ItemCard;