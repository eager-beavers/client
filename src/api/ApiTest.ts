import {axios} from "./AxiosConfig";

export const apiTest = async () => {
    return await axios.get("https://jsonplaceholder.typicode.com/todos/1");
}