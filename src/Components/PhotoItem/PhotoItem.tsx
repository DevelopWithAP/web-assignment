import React from 'react';
import {Photo} from '../../types/Photo';
import PhotoItemWrapper from '../PhotoItemWrapper/PhotoItemWrapper';

type PhotoItemProps = {
    photo: Photo;
    isFavourite: boolean;
    onFavourite: (id:number) => void;
    onUnfavoutire: (id:number) => void;
};

const PhotoItem = ({photo, isFavourite, onFavourite, onUnfavoutire}: PhotoItemProps) => {

    const handleFavourite = () => {
        isFavourite ? onUnfavoutire(photo.id) : onFavourite(photo.id);
    };

    return (
        <div>
            <PhotoItemWrapper photographer={photo.photographer} isFavourite={isFavourite} onClick={handleFavourite} />
            <img src={photo.src.tiny} />
        </div>
    );
};

export default PhotoItem;
