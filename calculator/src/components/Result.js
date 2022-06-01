import React from "react";
import "../style/result.css"

export default function Result(props){

    return (
        <div className="result">
            <h3>{props.result ? props.result : 0}</h3>
        </div>
    )
}