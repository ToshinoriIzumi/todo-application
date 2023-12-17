import { useState, useEffect } from 'react';
import type { Todo } from '../types/todo';
import  axios  from 'axios';
import { URL } from '../utils/const';

export const useFetchTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        const searchTodos = async () => {
            setLoading(true);
            axios.get<Todo[]>(URL)
            .then((res) => {
                setTodos(res.data);
            })
            .catch((err) => {setError(err)})
            .finally(() => {setLoading(false)});
        }
        searchTodos();
    }, []);
    return { todos, setTodos, loading, error };
};