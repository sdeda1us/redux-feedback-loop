import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    
    state = {
        newUnderstanding: ''
      }

    
    nextPage = () => {
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
                <label>Understanding?</label>
                <input onChange={this.handleChange} type="number" min="0" max="5"/>
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(Understanding);