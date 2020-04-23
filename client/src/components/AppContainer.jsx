import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './AppContainer.css';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notStarted: [],
            started: [],
            complete: []
        }
    }

    // Called when initially mounted. Call method to load data
    componentDidMount() {
        this.loadData();
    }

    // This method will fetch all the items
    loadData = async () => {
        // get not started
        let resp = await fetch('/api/not_started'); // send the fetch request
        let jsonResult = await resp.json();
        this.setState({ notStarted: jsonResult });

        // Get started
        resp = await fetch('/api/started'); // send the fetch request
        jsonResult = await resp.json();
        this.setState({ notStarted: jsonResult });

        // Get complete
        resp = await fetch('/api/complete'); // send the fetch request
        jsonResult = await resp.json();
        this.setState({ complete: jsonResult });


        console.log(this.state);
    }

    render() {
        return (
            <div>
                <Router>
                    <Link to="/">Home Page</Link>
                        <div className= "jumbotron">
                            <h2>Stuff to Do...</h2>
                        </div>
                    <Route exact path="/" component={AppContainer}>
                    <TaskList tasklistname="Not Started" tasks={this.state.notStarted}></TaskList>
                    <TaskList tasklistname="In Progress" tasks={this.state.started}></TaskList>
                    <TaskList tasklistname="Completed" tasks={this.state.complete}></TaskList>
                    </Route>
                </Router>
            </div>
        );
    }
}

export default AppContainer;