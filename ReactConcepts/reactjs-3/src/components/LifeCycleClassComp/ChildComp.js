import React, { Component } from 'react'

class ChildComp extends Component {
    constructor(props) { 
        super(props)
        console.log('[Child]: Inside Constructor')
    }

    componentDidMount() {
        console.log('[Child]: Inside ComponentDidMount')
        console.log('[Child]: Mounting Finished')
    }
    componentWillUnmount() {
        console.log('[Child]: Inside ComponentWillUnmount')
        console.log('[Child]: Unmounting Finished')
    }
  render() {
      console.log('[Child]: Inside render')
    return (
        <div>
            <h3>Child Component</h3>
      </div>
    )
  }
}

export default ChildComp