import React from "react";
import Questions from "./Questions";

function Faq(props){

    const content = props.questions.map((question) =>
    <Questions key={question.id} qs={question.title} info={question.info} />)

    return(
        <ul>
            {content}
        </ul>
    );
};

export default Faq;