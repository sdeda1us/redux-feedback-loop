import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Comments extends Component {

    state = {
        newComments: ''
      }

    backPage = (event) => {
        this.props.history.push('/support');
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
                {/* <label>Comments?</label> */}
                <TextField
                    id="standard-textarea"
                    label="Comments?"
                    multiline
                    fullWidth
                    rows={10}
                    variant="filled"
                    onChange={this.handleChange}
                />
                {/* <TextField label="Comments?" onChange={this.handleChange} type="text"/> */}
                <Button variant="contained" onClick={this.nextPage}>Next</Button>
                <Button variant="outlined" onClick={this.backPage}>Back</Button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(Comments);