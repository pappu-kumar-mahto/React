import React, { Component } from 'react'
import ChildComp from './ChildComp'
class ParentComp extends Component {
    constructor(props) { 
        super(props)
        console.log('Inside Constructor')
        this.state = {
            count: 0,
            show:true
        }
    }

    componentDidMount() {
        console.log('[Parent]: Inside ComponentDidMount')
        console.log('Mounting Finsihed')
    }

    componentDidUpdate() {
        console.log('[Parent]: ComponentDidUpdate')
        console.log('Updating Finsihed')
    }
    render() {
        console.log('[Parent]: Inside Render')
    return (
        <div>
            <h1>Parent-Component</h1>
            <h2>{this.state.count}</h2>
            <button
                onClick={() => 
                    this.setState((prevCount) => ({count: prevCount.count + 1}))
                 }
            >
                Increment
            </button>
            { this.state.show && <ChildComp/> }
            <button
                onClick={() => 
                    this.setState((prevShow) => ({show: !prevShow.show}))
                }
            >Show/Hide</button>
      </div>
    )
  }
}

export default ParentComp