import React, { Component } from 'react';


class Success extends Component {
    restartFeedback = () => {
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

export default Success;