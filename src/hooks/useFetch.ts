import {useEffect, useState, useCallback} from 'react';
import {Photo} from '../types/Photo';
import { fetchWrapper } from '../api/fetchWrapper';

export const useFetch = (page?:number) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [newPhotos, setNewPhotos] = useState<Photo[]>([]);

    const fetchMoreData = useCallback(async () => {
        setLoading(true);

        fetchWrapper(page)
        .then(data => {
            setNewPhotos(data.photos);
            setLoading(false);
        });
    },[page]);

    useEffect(() => {
        fetchMoreData();
    },[page]);

    return { newPhotos, loading };
};