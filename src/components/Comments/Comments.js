import React, { Component } from 'react';


class Comments extends Component {
    render() {
        return (
            <div>
                <h2>Any comments you wish to leave?</h2>
                <label>Comments?</label>
                <input type="text"/>
                <button>Next</button>
            </div>
        )
    }
}

export default Comments;