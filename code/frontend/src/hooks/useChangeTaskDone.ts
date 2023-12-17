import { useState } from 'react';
import type { TaskDoneInput } from '../types/task';
import  axios  from 'axios';
import { URL } from '../utils/const';

export const useChangeTaskDone = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const changeTaskDone = async (task: TaskDoneInput) => {
        setLoading(true);
        axios.put<TaskDoneInput>(URL + '/task/done/' + task.id, task)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {setError(err)})
        .finally(() => {setLoading(false)});
    };

    return { loading, error, changeTaskDone };
};