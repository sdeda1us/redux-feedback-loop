import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    
    state = {
        newUnderstanding: ''
      }

    
    nextPage = (event) => {
        event.preventDefault();
        this.props.dispatch({type:'ADD_UNDERSTAND', payload: this.state.newUnderstanding});
        this.props.history.push('/support');
    }
    
    handleChange = (event) => {
        this.setState({
            newUnderstanding: event.target.value,
        });
    }

    render() {
        return (
            
            <div>
                <h2>How well are you understanding the content?</h2>
                <form onSubmit={this.nextPage}>
                    <label>Understanding?</label>
                    <input onChange={this.handleChange} type="number" min="0" max="5" required/>
                    <button type="Submit">Next</button>
                </form>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(Understanding);