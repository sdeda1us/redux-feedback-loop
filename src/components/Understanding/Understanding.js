import React, { Component } from 'react';


class Understanding extends Component {
    nextPage = () => {
        this.props.history.push('/support');
    }
    
    render() {
        return (
            
            <div>
                <h2>How well are you understanding the content?</h2>
                <label>Understanding?</label>
                <input type="number"/>
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

export default Understanding;