import React, { Component } from 'react';


class Supported extends Component {
    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <label>Support?</label>
                <input type="number"/>
                <button>Next</button>
            </div>
        )
    }
}

export default Supported;