import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
                    {/* <label>Support?</label> */}
                    <TextField label="Support?" size="20" onChange={this.handleChange} type="number" min="0" max="5" required/>
                    <Button variant="contained" type="submit">Next</Button>
                </form>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(Supported);