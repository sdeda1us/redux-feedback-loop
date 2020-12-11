import React, { Component } from 'react';


class Understanding extends Component {
    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <label>Understanding?</label>
                <input type="number"/>
                <button>Next</button>
            </div>
        )
    }
}

export default Understanding;