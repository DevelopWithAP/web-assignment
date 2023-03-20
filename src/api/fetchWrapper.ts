import { photosBaseUrl } from './constants/baseUrl';

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchWrapper = async (page?:number): Promise<any> => {

    const baseUrl = photosBaseUrl;

    const response = await fetch(`${baseUrl}/curated/?page=${page}`, {
        headers: {
            Authorization: API_KEY
        }
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
};