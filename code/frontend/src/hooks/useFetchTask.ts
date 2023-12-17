import { useState, useEffect } from 'react';
import type { Task } from '../types/task';
import  axios  from 'axios';
import { URL } from '../utils/const';

export const useFetchTask = () => {
    const [task, setTask] = useState<Task | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    
    const searchTaskById = async (id: number) => {
        setLoading(true);
        axios.get<Task>(URL + '/detail/' + id)
        .then((res) => {
            console.log(res);
            setTask(res.data);
        })
        .catch((err) => {setError(err)})
        .finally(() => {setLoading(false)});
    }
    
    return { task, searchTaskById, loading, error };
};