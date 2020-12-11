import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// let dbObject = {
//     feelings:this.props.reduxState.feelingStore,
//     understanding: this.props.reduxState.understandingStore,
//     supported: this.props.reduxState.supportedStore,
//     comments: this.props.reduxState.commentsStore
// }
 
class Success extends Component {
    restartFeedback = () => {
        
        axios.post('/feedback', 
        {feelings:this.props.reduxState.feelingStore, 
        understanding: this.props.reduxState.understandingStore,
        supported: this.props.reduxState.supportedStore,
        comments: this.props.reduxState.commentsStore})
        this.props.dispatch({type: 'CLEAR_FIELDS'});
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Feedback!</h2>
                </div>
                <div>
                    <h2>Thank You!</h2>
                    <button onClick={this.restartFeedback}>Leave new feedback</button>
                </div>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(Success);