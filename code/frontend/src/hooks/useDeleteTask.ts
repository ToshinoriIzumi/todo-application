import axios from "axios";
import { URL } from "../utils/const";

export const useDeleteTask = () => {
    
    const deleteTask = async (id:number) => {
        axios.delete<number>(URL + `/task/${id}`)
        .then((res) => {
            console.log(res);
        })
    };
    
    return { deleteTask }
};