import React from 'react'
import type { Todo } from '../types/todo'
import { useFetchTodos } from '../hooks/useFetchTodos'
import { Link } from 'react-router-dom'

const  TaskList = () => {
  const { todos, error, loading } = useFetchTodos();
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
                {todo.title}: {todo.description}
              </li>
            ))
        )}
      </ul>
    </div>
  )
}

export default TaskList