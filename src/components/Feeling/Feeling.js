import React, { Component } from 'react';


class Feeling extends Component {
    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <label>Feeling?</label>
                <input type="number"/>
                <button>Next</button>
            </div>
        )
    }
}

export default Feeling;