import React from "react"

const GrandChildComponent1 = (props) => {
    console.log(props)
  
    return (
        <div className="grandChildComponent1">
            <h3>{props.title}</h3>
            <p>{ props.description }</p>
        </div>
    )
}

export default GrandChildComponent1