import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Supported extends Component {
    state = {
        newSupported: ''
      }

    backPage = (event) => {
        this.props.history.push('/understand');
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
                    {/* <label>Support?</label> */}
                    <TextField label="Support?" onChange={this.handleChange} type="number" min="0" max="5" required/>
                    <Button variant="contained" type="submit">Next</Button>
                    <Button variant="outlined" onClick={this.backPage}>Back</Button>
                </form>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(Supported);