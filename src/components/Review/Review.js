import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Review extends Component {

    nextPage = () => {
        this.props.history.push('/success');
    }

    render() {
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <p>Feelings: {this.props.reduxState.feelingStore}</p>
                <p>Understanding: {this.props.reduxState.understandingStore}</p>
                <p>Support: {this.props.reduxState.supportedStore}</p>
                <p>Comments: {this.props.reduxState.commentsStore}</p>
                <Button variant="contained" onClick={this.nextPage}>Submit</Button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(Review);