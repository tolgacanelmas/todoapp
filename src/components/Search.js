import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Search({ handleAddTodo, handleChangeTodoName, todoName }) {

    return (
        <div className='search'>
            <TextField id="outlined-basic" label="New Task" variant="outlined" onChange={handleChangeTodoName} className='input-control' value={todoName} />
            <Button variant="contained" onClick={handleAddTodo}>Add</Button>
        </div>
    );
}

export default Search;