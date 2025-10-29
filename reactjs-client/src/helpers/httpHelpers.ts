import axios from "axios";

export class HttpHelpers {

    static async get<T>(api: string): Promise<T> {
        return new Promise((resolve, reject) => {
            axios.get(api).then((response) => {
                resolve(response.data);
            });
        });
    }

    static async post<T>(api: string, body?: any): Promise<T> {
        return new Promise((resolve, reject) => {
            axios.post(api, body).then((response) => {
                resolve(response.data);
            });
        });
    }

    static async put<T>(api: string, id: string, body?: any): Promise<T> {
        return new Promise((resolve, reject) => {
            api = `${api}/${id}`;
            axios.put(api, body).then((response) => {
                resolve(response.data);
            });
        });
    }

    static async delete<T>(api: string, id: string): Promise<T> {
        return new Promise((resolve, reject) => {
            api = `${api}/${id}`;
            axios.delete(api).then((response) => {
                resolve(response.data);
            });
        });
    }
}