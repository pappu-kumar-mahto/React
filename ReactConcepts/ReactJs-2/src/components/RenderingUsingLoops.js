import React, { Component } from 'react';

class RenderingUsingLoops extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students : [
                {
                    name: 'Pappu',
                    batchNo: '10',
                    city: 'Dhanbad'
                },
                {
                    name: 'Vikram',
                    batchNo: '9',
                    city: 'Ranchi'
                },
                {
                    name: 'Pushpesh',
                    batchNo: '11',
                    city: 'Bokaro'
                },
                {
                    name: 'Mukesh',
                    batchNo: '8',
                    city: 'Chas'
                },
                {
                    name: 'Golu',
                    batchNo: '12',
                    city: 'Sector-4'
                }
            ]
        }
    }
    render() {
        let { students } = this.state
        return (
          <>
            {students.map((student, index) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  border: "1px solid black",
                  margin: "8px",
                  padding: "5px",
                }}
                key={index}
              >
                <h1>{student.name}</h1>
                <h1>{student.batchNo}</h1>
                <h1>{student.city}</h1>
              </div>
            ))}
          </>
        );
    }
}

export default RenderingUsingLoops