import { useEffect, useState } from 'react';

export const useInfiniteScroll = (callbackFn: any) =>  {
    const [isFetching, setIsFetching] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if(!isFetching) {
            return;
        }
        callbackFn(() => {
            console.log('Called Back...');
        });
    }, [isFetching]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) {
            return;
        }
        setIsFetching(true);

        return {isFetching, setIsFetching};
    };
};