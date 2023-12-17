import { useState, useEffect } from 'react';
import type { Task } from '../types/task';
import  axios  from 'axios';
import { URL } from '../utils/const';

export const useFetchTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        const searchTasks = async () => {
            setLoading(true);
            axios.get<Task[]>(URL)
            .then((res) => {
                setTasks(res.data);
            })
            .catch((err) => {setError(err)})
            .finally(() => {setLoading(false)});
        }
        searchTasks();
    }, []);
    return { tasks, setTasks, loading, error };
};