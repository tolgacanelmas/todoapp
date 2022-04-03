import React from 'react';
import Todo from './Todo';

function Todos({ todos, deleteTodo }) {
    return (
        <div className='todos'>
            {
                todos.map((todo, i) => {
                    return (
                        <Todo todo={todo} key={i} deleteTodo={deleteTodo} />
                    )
                })
            }
        </div>
    );
}

export default Todos;