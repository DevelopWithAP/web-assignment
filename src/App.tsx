import React, { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'
import { fetchWrapper } from './api/fetchWrapper';
import { Photo } from './types/Photo';
import PhotosContainer from './Components/PhotosContainer/PhotosContainer';
import { useLocalState } from './hooks/useLocalState';
// import { useFetch } from './hooks/useFetch';

function App() {

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [favourites, setFavourites] = useLocalState<number[]>([], 'favourite photos');
  const [prevPage, setPrevPage] = useState<number>(0);
  const [currPage, setCurrPage] = useState<number>(1);
  const [lastPhotos, setLastPhotos] = useState<boolean>(false);
  const innerRef = useRef(); 

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
