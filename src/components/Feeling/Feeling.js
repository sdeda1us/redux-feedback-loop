import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
    
    state = {
        newFeeling: ''
      }

    nextPage = (event) => {
        event.preventDefault();
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
                <form onSubmit={this.nextPage}>
                    <label>Feeling?</label>
                    <input onChange={this.handleChange} type="number" min="0" max="5" required/>
                    <button type="submit">Next</button>
                </form>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(Feeling);