import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>Task List {this.props.tasklistname}</h1>
                <div className="taskList">
                <hr/>
                {this.props.tasks.map((task, index) => {
                    return (
                        <div key={task._id}>
                            <Task task={task}/>
                            <hr />
                        </div>

                    )
                })}                   
                </div>
            </div>
        );
    }
}

export default TaskList;