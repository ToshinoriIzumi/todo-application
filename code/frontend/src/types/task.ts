export type Task = {
    id: number;
    title: string;
    description: string;
    done: boolean;
};

export type TaskInput = {
    title: string;
    description: string;
};

export type TaskDoneInput = {
    id: number;
    done: boolean;
};