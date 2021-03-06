
/*
	Components 2 types:
	1. Function based components
	2. Class based components
	Class based components 
		- Previously - state and props
		- additional syntax
		- overhead of 'this' keyword
	Function based components 
		- Previously - props (couldn't have its own state, With the coming of 'Hooks' -> Create state in function based components)
		- simple syntax
		- No 'this' keyword dependency
	Component re-renders whenever there is a change in either 
	1. state (Data which is private/specific to a single component)
	2. props (Data sent from parent component to child component)

    -----------------------------------------------------------------------------------------------------------------------
    import React, { Component } from 'react';

    class HelloClass extends Component {
        constructor(props) {
            super(props)

            this.state = {
                batchNo: 10,
                country: 'India'
            }
        }

        changeBatchNo = () => {
            this.setState({
                batchNo: 9
            })
        }

        changeCountry = () => {
            this.setState({
                country: 'US'
            })
        }

        render() {
            const { student1, student2 } = this.props
            const { batchNo, country } = this.state
            return (
                <>
                    <h1>Hello {student1} {student2 && `and ${student2}`}</h1>
                    <h2>Current Batch: {batchNo}</h2>
                    <h2>Country of residence: {country}</h2>
                    <button onClick={this.changeBatchNo}>Change Batch Number</button>
                    <button onClick={this.changeCountry}>Change Country</button>
                </>
            )
        }
    }

    export default HelloClass
    --------------------------------------------------------------------------------------------------
        import React from 'react';

        const Hello = ({ student1, student2 }) => {
            return (
                <h1>Hello {student1} {student2 && `and ${student2}`}</h1>
            )
        }

        export default Hello

    -------------------------------------------------------------------------------------------------------
        import './App.css';
        import Hello from './components/Hello'
        import HelloClass from './components/HelloClass'

        function App() {
        return (
            <div className="App">
            <Hello student1='Rajesh' student2='Sunil' />
                    <Hello student1='Samaikhya' student2='Santhana' />
                    <HelloClass student1='Rajesh' student2='Sunil' />
                    <HelloClass student1='Samaikhya' /> 
                    </div>
                    );
                }
                
*/