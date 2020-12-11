import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
    
    state = {
        newFeeling: ''
      }

    nextPage = (event) => {
        this.props.dispatch({type:'ADD_FEELING', payload: this.state.newFeeling});
        this.props.history.push('/understand');
    }
    
    handleChange = (event) => {
        this.setState({
            newFeeling: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <label>Feeling?</label>
                <input onChange={this.handleChange} type="number" min="0" max="5" />
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(Feeling);