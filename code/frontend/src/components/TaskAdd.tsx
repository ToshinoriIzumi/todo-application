import { ChangeEvent, useState, FC } from 'react';
import { useAddTodo } from '../hooks/useAddTodo';

const TaskAdd: FC = () => {
    const { addTodo, error  } = useAddTodo();
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    }
    
    return (
        <>
            <div>TaskAdd</div>
            <input type='text' value={title} onChange={handleTitleChange} />
            <input type='text' value={description} onChange={handleDescriptionChange} />
            <button onClick={() => addTodo(title, description)}>Add</button>
        </>
    )
}

export default TaskAdd