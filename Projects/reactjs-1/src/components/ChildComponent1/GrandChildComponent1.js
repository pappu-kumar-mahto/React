import React from "react"

const GrandChildComponent1 = ({title, description}) => {
  
    return (
        <div className="grandChildComponent1">
            <h3>{title}</h3>

            {description && <p>{description}</p>}
        </div>
    )
}

export default GrandChildComponent1