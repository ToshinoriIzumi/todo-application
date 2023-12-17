import React from 'react';
import type { Todo, TodoDoneInput } from '../types/todo';
import { useFetchTodos } from '../hooks/useFetchTodos';
import { useChangeTodoDone } from '../hooks/useChangeTodoDone';
import { Link } from 'react-router-dom';

const  TaskList = () => {
  const { todos, setTodos, error, loading } = useFetchTodos();
  const { changeTodoDone } = useChangeTodoDone();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    todos.map((todo: Todo) => {
      if (todo.id === Number(e.target.value)) {
        todo.done = !todo.done;
        changeTodoDone({id: todo.id, done: todo.done});
      }
    });
    setTodos([...todos]);
  };

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <h2 className="text-3xl font-bold underline">TaskList</h2>
      <Link to="/taskadd">タスクの追加</Link>
      <ul>
        { loading ? (
          <div>Loading...</div>
        ) : (
          
            todos.map((todo: Todo) => (
              <li key={todo.id}>
                <input 
                  type='checkbox'
                  checked={todo.done}
                  value={todo.id}
                  onChange={handleCheckboxChange}
                />
                  <span style={{ textDecoration: todo.done ? 'line-through' : 'none'}}>
                    {todo.title}
                  </span>
              </li>
            ))
        )}
      </ul>
    </div>
  )
}

export default TaskList