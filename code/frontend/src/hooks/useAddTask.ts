import { useState } from 'react';
import type { TaskInput } from '../types/task';
import  axios  from 'axios';
import { URL } from '../utils/const';
import { useNavigate } from 'react-router-dom';

export const useAddTask = () => {
    const [error, setError] = useState<Error | null>(null);
    const navigate = useNavigate();
    const addTask = async (titile:string, description:string) => {
        const task: TaskInput = {title: titile, description: description};
        axios.post<TaskInput>(URL + '/task', task)
        .then((res) => {
            navigate('/');
        })
        .catch((err) => {setError(err)});
    };
    return { addTask, error };
};