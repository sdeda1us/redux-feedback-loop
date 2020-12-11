import React, { Component } from 'react';


class Review extends Component {

    nextPage = () => {
        this.props.history.push('/success');
    }

    render() {
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <p>Feelings: </p>
                <p>Understanding</p>
                <p>Support:</p>
                <p>Comments</p>
                <button onClick={this.nextPage}>Submit</button>
            </div>
        )
    }
}

export default Review;