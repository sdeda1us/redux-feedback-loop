import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        newComments: ''
      }

    nextPage = () => {
        this.props.dispatch({type:'ADD_COMMENTS', payload: this.state.newComments});
        this.props.history.push('/review');
    }

    handleChange = (event) => {
        this.setState({
            newComments: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <h2>Any comments you wish to leave?</h2>
                <label>Comments?</label>
                <input onChange={this.handleChange} type="text"/>
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(Comments);