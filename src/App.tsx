import { useState } from 'react'
import './App.css'
import PhotosContainer from './Components/PhotosContainer/PhotosContainer';
import Spinner from './Components/Spinner/Spinner';
import { useLocalState } from './hooks/useLocalState';
import { useFetch } from './hooks/useFetch';
import InfinintScroll from './Components/InfininteScroll/InfiniteScroll';

function App() {
  const [favourites, setFavourites] = useLocalState<number[]>([], 'favourite photos');
  const [page, setPage] = useState<number>(1);

  const { photos, loading, hasMore } = useFetch(page);

  const handleLoadMore = () => {
    setPage(page => page + 1);
  };

  const handleFavourite = (itemId: number) => {
    setFavourites(current => current.concat(itemId));
  };

  const handleUnfavourite = (itemId: number) => {
    setFavourites(current => current.filter(favourite => favourite !== itemId));
  };

  return (
    <>
      {page === 1 && loading}
      <InfinintScroll
        hasMore={hasMore}
        isLoading={loading}
        loader={() => <Spinner />}
        onLoadMore={handleLoadMore}
      >
        <PhotosContainer favourites={favourites} photos={photos} onFavourite={handleFavourite} onUnfavourite={handleUnfavourite} />
      </InfinintScroll>
    </>
  );
}

export default App;
