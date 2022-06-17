import React, { Component } from 'react'
import CartComponent from "./CartComponent"

class ParentComponent extends Component {
    render() {
        return (
          <div
            style={{
              display: "inline-block",
              border: "1px solid black",
              width: "30%",
              height: "100%",
              margin: "15px",
            }}
            >
                <CartComponent/>
          </div>
        );
    }
}
export default ParentComponent