// This will contain all the handling of routes/endpoints
const express = require('express');
const router = express.Router();
router.use(express.json());

// Get ref to our model
let TaskCollection = require('../models/TaskListSchema.js');

//////////////////////////////////////////
// Add endpoints and routing here
//////////////////////////////////////////

// Add a new task to not started list
router.post('/', (req, res) => {
    const debug_msg = `Got a CREATE task request!`;
    console.log(debug_msg); // Sanity debug
    console.log(req.body); // Sanity debug
    // Actually update the backend database
    TaskCollection.create(req.body, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
});

// Move a task to a different list
router.put('/:task_name/:next_queue', (req, res) => {
    const debug_msg = `Got an UPDATE/move item request! ${req.params.task_name}`;
    console.log(debug_msg); // Sanity debug
    // res.send(req.body); // Send the response
    TaskCollection.findOneAndUpdate({ taskName: req.params.task_name }, { taskStatus: req.params.next_queue }, { new: true }, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    });
});

// Get tasks of some type
router.get('/task/:taskStatus', (req, res) => {
    const debug_msg = `Got a request for item queue ${req.params.current_queue}`;
    console.log(debug_msg); // Sanity debug
    TaskCollection.find(
        { taskStatus: req.params.taskStatus }, (errors, results) => {
            errors ? res.send(errors) : res.send(results);
        }
    );
});
// Update a task's details
// TODO

// Delete a completed task
// TODO

// Let's setup some SEED data here
router.get('/seed/data', (req, res) => {
    console.log(`Creating some seed data...`);
    const seedData = [
        {
            "taskName": "Clean Room",
            "taskDesc": "Computer room needs a bad cleaning including all hardware.",
            "taskDueDate": (new Date())
            // "taskStatus" // This should default to not_started queue
        },
        {
            "taskName": "Order Groceries",
            "itemDesc": "Need to get an order in for essentials. Who knows when they will actually show up.",
            "taskDueDate": (new Date()),
            "taskStatus": "started"
        },
        {
            "taskName": "Update Passwords",
            "taskDesc": "Has been a long time since we checked/updated passwords across all accounts.",
            "taskDueDate": (new Date()),
            "taskStatus": "completed"
        }
    ];

    // Drop current test records
    TaskCollection.remove({}, function (err) {
        console.log('Task collection removed')
    });

    // Add to our collection
    TaskCollection.create(seedData, (errors, results) => {
        if (errors) res.send(errors);
        else res.send(results);
    }
    );
});

// Export named reference
module.exports = router;