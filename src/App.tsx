import { useState, useEffect } from 'react'
import './App.css'
import { fetchWrapper } from './api/fetchWrapper';
import { Photo } from './types/Photo';
import PhotosContainer from './Components/PhotosContainer/PhotosContainer';
import { useLocalState } from './hooks/useLocalState';

function App() {

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [favourites, setFavourites] = useLocalState<number[]>([], 'favourite photos');

  const fetchData = () => {
    fetchWrapper()
      .then(data => {
        setPhotos(data.photos);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFavourite = (itemId: number) => {
    setFavourites(current => current.concat(itemId));
  };

  const handleUnfavourite = (itemId: number) => {
    setFavourites(current => current.filter(favourite => favourite !== itemId));
  };

  return (
      <>
      <PhotosContainer favourites={favourites} photos={photos} onFavourite={handleFavourite} onUnfavourite={handleUnfavourite}/>
      </>
  );
}

export default App;
