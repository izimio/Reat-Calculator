import React, {useState} from "react";
import "../style/button.css"

export default function Button(props) {

    return (
        <div className="button" onClick={() => props.HandleClick(props.value)}>
            <h3>{props.value}</h3>
        </div>
    )
}