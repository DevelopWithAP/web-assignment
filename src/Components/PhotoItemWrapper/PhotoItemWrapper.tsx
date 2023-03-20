import React from 'react';

type PhotoItemWrapperProps = {
    photographer: string;
    isFavourite: boolean;
    onClick: () => void;
};

const PhotoItemWrapper = ({photographer, isFavourite, onClick}: PhotoItemWrapperProps): JSX.Element => {
    return (
        <div>
            <h5>{photographer}</h5>
            <button onClick={onClick}>{isFavourite ? 'favourite' : 'unfavourite'}</button>
        </div>
    );
};

export default PhotoItemWrapper;
