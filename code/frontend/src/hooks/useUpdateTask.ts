import { useState } from 'react';
import type { TaskInput } from '../types/task';
import  axios  from 'axios';
import { URL } from '../utils/const';
import { useNavigate } from 'react-router-dom';

export const useUpdateTask = () => {
    const [error, setError] = useState<Error | null>(null);
    const navigate = useNavigate();
    const updateTask = async (id: number, titile:string, description:string) => {
        const task: TaskInput = {title: titile, description: description};
        axios.put<TaskInput>(URL + `/task/${id}/update`, task)
        .then((res) => {
            navigate('/');
        })
        .catch((err) => {setError(err)});
    };
    return { updateTask, error };
};