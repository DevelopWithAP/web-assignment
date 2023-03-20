import React from 'react';
import PhotoItem from '../PhotoItem/PhotoItem';
import {Photo} from '../../types/Photo';

type PhotosContainerProps = {
    photos: Photo[];
    onFavourite: (id:number) => void;
    onUnfavourite: (id:number) => void;
    favourites: number[];
};

const PhotosContainer = ({photos, favourites, onFavourite, onUnfavourite}: PhotosContainerProps): JSX.Element => {

    const getFavourites = (photoId: number, favourites: number[]) => favourites.includes(photoId);

    const allPhotos = photos.map(photo => (
        <PhotoItem key={photo.id} photo={photo} isFavourite={getFavourites(photo.id, favourites)} onFavourite={onFavourite} onUnfavoutire={onUnfavourite}/>
    ));

    return (
        <div>
            {allPhotos}
        </div>
    );
};

export default PhotosContainer;
