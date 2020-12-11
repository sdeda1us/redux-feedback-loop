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

class Understanding extends Component {
    
    state = {
        newUnderstanding: ''
      }

    
    nextPage = (event) => {
        event.preventDefault();
        this.props.dispatch({type:'ADD_UNDERSTAND', payload: this.state.newUnderstanding});
        this.props.history.push('/support');
    }
    
    handleChange = (event) => {
        this.setState({
            newUnderstanding: event.target.value,
        });
    }

    render() {
        return (
            
            <div>
                <h2>How well are you understanding the content?</h2>
                <form onSubmit={this.nextPage}>
                    {/* <label>Understanding?</label> */}
                    <TextField label="Understanding?" size="20" onChange={this.handleChange} type="number" min="0" max="5" required/>
                    <Button variant="contained" type="Submit">Next</Button>
                </form>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });

export default connect(putReduxStateOnProps)(Understanding);