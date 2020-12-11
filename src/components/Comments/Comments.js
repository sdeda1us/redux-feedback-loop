import React, { Component } from 'react';


class Comments extends Component {

    nextPage = () => {
        this.props.history.push('/review');
    }
    render() {
        return (
            <div>
                <h2>Any comments you wish to leave?</h2>
                <label>Comments?</label>
                <input type="text"/>
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

export default Comments;