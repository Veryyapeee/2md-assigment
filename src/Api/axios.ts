import axios, { AxiosResponse } from 'axios';

import Gallery from 'Api/Gallery/gallery';

export const instance = axios.create({
    baseURL: 'https://picsum.photos/',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
    },
})

const response = <T>(response: AxiosResponse<T>) => response;

export const request = {
    get: <T>(url: string) => instance.get<T>(url).then(response),
}

const agent = {
    Gallery
}

export default agent;