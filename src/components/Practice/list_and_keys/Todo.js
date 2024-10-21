import React, { useState } from 'react';

function Todo(){
    const [todos, setTodos] = useState([
        {id: 1, task: 'Hello React'}
    ]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        setTodos([...todos, {id : todos.length +1, task: newTask}]);
        setNewTask('');
    };

    const removeTask = (id) => {
        setTodos(todos.filter(todo => todo.id != id));
    };
    return(
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.task}
                        <button onClick={() => removeTask(todo.id)}>Delet</button>
                    </li>
                ))}
            </ul>
            <input type='text'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder='New Task'
            />
            <button onClick={addTask}>Add Task</button>
        </div>
    )
}
export default Todo;