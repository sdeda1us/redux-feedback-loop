import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  }));

class Feeling extends Component {
    
    state = {
        newFeeling: ''
      }

    nextPage = (event) => {
        event.preventDefault();
        this.props.dispatch({type:'ADD_FEELING', payload: this.state.newFeeling});
        this.props.history.push('/understand');
    }
    
    handleChange = (event) => {
        this.setState({
            newFeeling: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <form onSubmit={this.nextPage}>
                    {/* <label>Feeling?</label> */}
                    <TextField label="Feeling?" onChange={this.handleChange} type="number" min="0" max="5" required/>
                    <Button variant="contained" type="submit">Next</Button>
                </form>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(Feeling);