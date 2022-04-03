import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo({ todo, i, deleteTodo }) {
    const [isCompleted, setIsCompleted] = useState(false)

    const todoIsCompleted = () => {
        setIsCompleted(!isCompleted)
    }

    return (
        <div key={i} className='todo'>
            <div className={`todo-content ${isCompleted ? 'completed' : ''}`}>
                <Checkbox onClick={todoIsCompleted} />
                <p>
                    {todo.name}
                </p>
            </div>
            <DeleteIcon className='delete' onClick={() => deleteTodo(todo.id)} />
        </div>
    );
}

export default Todo;