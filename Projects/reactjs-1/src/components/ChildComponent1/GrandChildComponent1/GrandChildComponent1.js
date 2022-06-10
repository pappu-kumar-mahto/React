import React from "react"
import "./GrandChildComponent1.css"
const GrandChildComponent1 = ({title, description, bgColor, txtColor}) => {
  
    return (
        <div
            className="grandChildComponent1"
            style={{ backgroundColor: bgColor, color: txtColor}}
        >
            <h3>{title}</h3>

            {description && <p>{description}</p>}
        </div>
    )
}

export default GrandChildComponent1

/*
way to apply styling using props.
<div
            className="grandChildComponent1"
            style = {{backgroundColor: `${bgColor}`}}
        >
            <h3>{title}</h3>

            {description && <p>{description}</p>}
        </div>
*/