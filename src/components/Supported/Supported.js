import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {
    state = {
        newSupported: ''
      }

    nextPage = (event) => {
        event.preventDefault();
        this.props.dispatch({type:'ADD_SUPPORTED', payload: this.state.newSupported});
        this.props.history.push('/comment');
    }

    handleChange = (event) => {
        this.setState({
            newSupported: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <form onSubmit={this.nextPage}>
                    <label>Support?</label>
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

export default connect(putReduxStateOnProps)(Supported);