import React from "react";
import styles from './Questions.module.css';

function Questions(props){

    return(
        <ul>
            {props.questions.map((question) => 
            <li key={question.id} >{question.title}</li>
            )}
        </ul>
    );
};

export default Questions;