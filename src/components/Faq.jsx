import React from "react";
import styles from './Faq.module.css'
import Questions from "./Questions";

function Faq(props){

    const content = props.questions.map((question) =>
    <Questions key={question.id} qs={question.title} info={question.info} />)

    return(
        <ul className={styles.container} >
            {content}
        </ul>
    );
};

export default Faq;