import React from "react";
import styles from './Questions.module.css';

function Questions(props){

    return(
        <li>
            <div>
                <h3>{props.qs}</h3>
                <button>+</button>
            </div>
            <p>{props.info}</p>
        </li>
    );
};

export default Questions;