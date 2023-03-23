import React, {useEffect, useRef, useCallback} from 'react';

export const useInfiniteScroll = (hasMore: boolean, loading: boolean, onLoadMore: () => void) => {
    const loaderRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver>(null) as React.MutableRefObject<IntersectionObserver>;
    const loadMore = hasMore && !loading;

    const callbackFn = useCallback((entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if(!entry.isIntersecting || !loading) {
            return;
        }
        onLoadMore();
    },[loadMore]);

    useEffect(() => {
        const node = loaderRef.current;
        if(node) {
            const observer = new IntersectionObserver(callbackFn, {
                rootMargin: '1500px',
            });
            observer.observe(node);
            observerRef.current = observer;
        }

        return () => {
            if(node) {
                observerRef.current.unobserve(node);
            }
        }
    },[callbackFn]);

    return loaderRef;
};