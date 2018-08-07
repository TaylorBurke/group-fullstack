import React, { Component } from 'react';
import axios from 'axios';

class Archive extends Component {
    constructor() {
        super();
        this.state = {
            completed: false
        }
    }


    // componentDidMount(){
    //     axios.get('/', {
    //      // get all the completed goals, todos and habits
    //     })
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //     }
    // }

    render() {
        return (
            <div className="Archive">
                Archives
            </div>
        )
    }

}

export default Archive;