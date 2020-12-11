import React, { Component } from 'react';


class Supported extends Component {

    nextPage = () => {
        this.props.history.push('/comment');
    }

    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <label>Support?</label>
                <input type="number"/>
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

export default Supported;