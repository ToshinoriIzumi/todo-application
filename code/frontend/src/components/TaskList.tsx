import React from 'react'
import { useEffect } from 'react'
import type { Todo } from '../types/todo'
import { useFetchTodos } from '../hooks/useFetchTodos'

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
      <h2>TaskList</h2>
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