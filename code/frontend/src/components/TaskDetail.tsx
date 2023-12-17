import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchTask } from '../hooks/useFetchTask';

const TaskDetail: FC = () => {
    const { id } = useParams();
    const { task, searchTaskById , error, loading } = useFetchTask();
    useEffect(() => {
        searchTaskById(Number(id));
    }, []);
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        console.log(error);
    }
    if (!task) {
        return <div>Taskが見つかりませんでした</div>
    }
    return (
        <>
            <h2>TaskDetail</h2>
            <div>{task.title}</div>
            <div>{task.description}</div>
        </>
    )
}

export default TaskDetail