import React from 'react';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

type InfiniteScrollProps = {
    hasMore: boolean;
    isLoading: boolean;
    onLoadMore: () => void;
    loader: () => React.ReactNode;
    children?: React.ReactNode;
};

const InfiniteScroll = ({hasMore, isLoading, loader, onLoadMore, children}: InfiniteScrollProps) => {
    const ref = useInfiniteScroll(hasMore, isLoading, onLoadMore);
    return (
        <div>
            {children}
            <div ref={ref}>{hasMore && loader()}</div>
        </div>
    );
};

export default InfiniteScroll;
