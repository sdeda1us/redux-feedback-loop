import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GradeIcon from '@material-ui/icons/Grade';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


 
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
                <Card>
                    <CardContent>
                        <h2><GradeIcon/>    Feedback!</h2>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <h2>Thank You!</h2>
                        <Button variant="contained" onClick={this.restartFeedback}>Leave new feedback</Button>
                    </CardContent>
                </Card>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(Success);