import {useEffect, useState} from 'react';
import { Photo } from '../types/Photo';
import { fetchWrapper } from '../api/fetchWrapper';
import {removeDuplicates} from '../util/removeDuplicates';

export const useFetch = (currPage:number) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<{photos: Photo[], totalResults: number}>({photos: [], totalResults: 0});

    useEffect(() => {
        const fetchData = async (page: number) => {
            setLoading(true);
            await fetchWrapper(page)
            .then(json => {
                console.log(json);
                setData(({
                    photos: removeDuplicates(data.photos, json.photos),
                    totalResults: json.total_results
                }));
            });
        };
        
        fetchData(currPage);

    },[currPage]);

    return { loading, photos: data.photos, hasMore: data.photos.length < data.totalResults };
};