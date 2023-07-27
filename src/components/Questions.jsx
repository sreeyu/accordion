import React, { useState } from "react";
import styles from './Questions.module.css';

function Questions(props){

    const [ans, setAns] = useState(false)

    const getAns = () => {
        setAns((prevAns) => !prevAns);
    }

    return(
        <li className={styles.questions}>
            <div className={styles.title} >
                <h3>{props.qs}</h3>
                <button onClick={getAns}>+</button>
            </div>
            {ans && <p>{props.info}</p>}
        </li>
    );
};

export default Questions;