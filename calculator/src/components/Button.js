import React from "react";
import "../style/button.css"

export default function Button(props) {
    const style_n = {
        backgroundColor: props.operator ? "#f79806" : "#313131",
        width: props.extend ? "180px" : "80px",
        borderRadius: props.extend ? "40px" : "50%",
    }

    const style_b = {
        backgroundColor: props.weird ? "#9e9e9f" : "rebecapurle",
        color: "black",
        borderRadius: props.extend ? "40px" : "50%",
    }

    return (
        <div style={props.weird ? style_b : style_n} className="button" onClick={() => props.handleClick(props.value)}>
            <h3>{props.value}</h3>
        </div>
    )
}