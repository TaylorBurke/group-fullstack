import React, { Component } from 'react';

class Archive extends Component {
    constructor() {
        super();
        this.state = {
            completed: false
        }
    }

    render() {
        return (
            <div className="Archive">
                Archives
            </div>
        )
    }

}

export default Archive;