import React, { useState, useEffect } from "react";
import "../style/result.css"

export default function Result(props) {

    return (
        <div className="result">
            <h3>{props.result}</h3>
            <p>{props.eval}</p>
        </div>
    )
}