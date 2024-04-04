import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './redux/slices/todoSilce';
// import { addTodo, deleteTodo } from './todoSlice'; 


const Todo = () => {
    const todoData = useSelector((state) => state.todos.todoData); 
    const dispatch = useDispatch();

    const addNewTodo = (e) => {
        e.preventDefault();
        const todoTitle = e.target.aty.value.trim();

        if (todoTitle.length > 0) {
            const newTodo = { title: todoTitle };
            dispatch(addTodo(newTodo));
        }
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div>
            <h2>Todo</h2>
            <form onSubmit={addNewTodo}>
                <input type="text" placeholder='enter todo' name='aty' />
                <input type="submit" />
            </form>
            <ol>
                {todoData.map((el) => (
                    <li key={el.id}>
                        {el.title}
                        <button onClick={() => handleDeleteTodo(el.id)}>delete</button>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Todo;
