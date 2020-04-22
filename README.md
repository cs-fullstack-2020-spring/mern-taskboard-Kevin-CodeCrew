# A fullstack MERN project to build a task board

We will be building a fullstack MERN (*M*ongo,*E*xpress,*R*eact,*N*ode) application for managing development tasks on a task board.

Our task model needs to include the following properties:
- Task Name
- Task Description
- Task Due Date
- Current Task Phase (notstarted, started, completed)

Your application should maintain 3 task boards: (notstarted, started, completed)

Your application should have a button to `Add a new task` to the `notstarted` list after the user enters atask name, description,and due date

Each task should have buttons to move it to the next list queue (if not in 'completed' queue) and a button to move to the previous queue (if not in `notstarted` queue)

> Only CREATE and moving between lists needs to be implemented for this mini-project

Check in at 10:30am, 1:00pm, 2:30pm

Challenges:
- Use `select` HTML elements to render lists and move between queues by selecting item in list and pressing a button to move it left or right between lists
- Implement `delete` for completed tasks
- Implement `edit` for tasks in the not started queue
