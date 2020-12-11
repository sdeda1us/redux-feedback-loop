import React, { Component } from 'react';


class Feeling extends Component {
    
    nextPage = () => {
        this.props.history.push('/understand');
    }
    
    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <label>Feeling?</label>
                <input type="number"/>
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

export default Feeling;