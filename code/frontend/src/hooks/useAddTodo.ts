import { useState } from 'react';
import type { TodoInput } from '../types/todo';
import  axios  from 'axios';
import { URL } from '../utils/const';
import { useNavigate } from 'react-router-dom';

export const useAddTodo = () => {
    const [error, setError] = useState<Error | null>(null);
    const navigate = useNavigate();
    const addTodo = async (titile:string, description:string) => {
        const todo: TodoInput = {title: titile, description: description};
        axios.post<TodoInput>(URL + '/post', todo)
        .then((res) => {
            navigate('/');
        })
        .catch((err) => {setError(err)});
    };
    return { addTodo, error };
};