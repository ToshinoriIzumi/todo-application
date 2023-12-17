export type Todo = {
    id: number;
    title: string;
    description: string;
    done: boolean;
};

export type TodoInput = {
    title: string;
    description: string;
};

export type TodoDoneInput = {
    id: number;
    done: boolean;
};