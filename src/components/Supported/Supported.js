import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {
    state = {
        newSupported: ''
      }

    nextPage = () => {
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
                <label>Support?</label>
                <input onChange={this.handleChange} type="number"/>
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(Supported);