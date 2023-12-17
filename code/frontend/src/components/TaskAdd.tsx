import { ChangeEvent, useState, FC } from 'react';
import { useAddTask } from '../hooks/useAddTask';

const TaskAdd: FC = () => {
    const { addTask, error  } = useAddTask();
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }
    
    return (
        <>
            <div>TaskAdd</div>
            <div>
                <input
                    type='text'
                    className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4'
                    value={title}
                    onChange={handleTitleChange}
                />
            </div>
            <div className=''>
                <textarea 
                    value={description}
                    onChange={handleDescriptionChange}
                    className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                </textarea>
            </div>
            <div>
                <button 
                    className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700'
                    onClick={() => addTask(title, description)}
                >
                    Add
                </button>
            </div>
        </>
    )
}

export default TaskAdd