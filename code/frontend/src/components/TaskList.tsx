import { ChangeEvent, FC } from 'react';
import type { Task } from '../types/task';
import { useFetchTasks } from '../hooks/useFetchTasks';
import { useChangeTaskDone } from '../hooks/useChangeTaskDone';
import { Link } from 'react-router-dom';

const  TaskList: FC = () => {
  const { tasks, setTasks, error, loading } = useFetchTasks();
  const { changeTaskDone } = useChangeTaskDone();

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    tasks.map((task: Task) => {
      if (task.id === Number(e.target.value)) {
        task.done = !task.done;
        changeTaskDone({id: task.id, done: task.done});
      }
    });
    setTasks([...tasks]);
  };

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <h2 className="text-3xl font-bold">TaskList</h2>
      <Link to="/taskadd">タスクの追加</Link>
      <ul>
        { loading ? (
          <div>Loading...</div>
        ) : (
          
            tasks.map((task: Task) => (
              <li key={task.id}>
                <input 
                  type='checkbox'
                  checked={task.done}
                  value={task.id}
                  onChange={handleCheckboxChange}
                />
                  <span className='' style={{ textDecoration: task.done ? 'line-through' : 'none'}}>
                    <Link to={`/task/${task.id}`}>{task.title}</Link>
                    <Link to={`/task/${task.id}/edit`}>編集</Link>
                  </span>
              </li>
            ))
        )}
      </ul>
    </div>
  )
}

export default TaskList