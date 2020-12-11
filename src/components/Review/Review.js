import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

    nextPage = () => {
        this.props.history.push('/success');
    }

    render() {
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <p>Feelings: {this.props.reduxState.feelingStore}</p>
                <p>Understanding</p>
                <p>Support:</p>
                <p>Comments</p>
                <button onClick={this.nextPage}>Submit</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(Review);