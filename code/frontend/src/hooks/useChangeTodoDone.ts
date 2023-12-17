import { useState } from 'react';
import type { Todo, TodoDoneInput } from '../types/todo';
import  axios  from 'axios';
import { URL } from '../utils/const';

export const useChangeTodoDone = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const changeTodoDone = async (todo: TodoDoneInput) => {
        setLoading(true);
        axios.put<TodoDoneInput>(URL + '/post/done/' + todo.id, todo)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {setError(err)})
        .finally(() => {setLoading(false)});
    };

    return { loading, error, changeTodoDone };
};