import React, {Component} from 'react';

class BulbOnOff extends Component { 
    constructor(props) { 
        super(props);

        this.state = {
            bulbStatus: false
        }
    }

    toggleBulb = () => {
        this.setState((prevStatus) => ({
            bulbStatus : !prevStatus.bulbStatus,
        }))
    }
    render() {
        let {bulbStatus} = this.state
        return (
          <>
            <img
              src={
                bulbStatus
                  ? "https://www.w3schools.com/js/pic_bulbon.gif"
                  : "https://www.w3schools.com/js/pic_bulboff.gif"
              }
              alt="bulb"
            />
            <br />
            <button onClick={this.toggleBulb}>Toggle Bulb</button>
          </>
        );
    }
}
export default BulbOnOff