import { ChangeEvent, useState, FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchTask } from '../hooks/useFetchTask';
import { useUpdateTask } from '../hooks/useUpdateTask';

const TaskEdit: FC = () => {
    const { updateTask, error  } = useUpdateTask();
    const { id } = useParams();
    const { task, searchTaskById , loading } = useFetchTask();
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    useEffect(() => {
        searchTaskById(Number(id));
    }, [id]);

    useEffect(() => {
        setTitle(task?.title ?? '');
        setDescription(task?.description ?? '');
    }, [task]);

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }
    
    return (
        <>
            <div>TaskUpdate</div>
            <div>
                <input
                    type='text'
                    className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4'
                    value={title}
                    onChange={handleTitleChange}
                />
            </div>
            <div>
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
                    onClick={() => updateTask(Number(id), title, description)}
                >
                    Update
                </button>
            </div>
        </>
    )
}

export default TaskEdit