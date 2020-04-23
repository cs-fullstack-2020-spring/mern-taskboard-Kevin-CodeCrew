import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(`Rendering task...`);
        return ( 
            <p>
            Entry
            </p>
         );
    }
}
 
export default Task;