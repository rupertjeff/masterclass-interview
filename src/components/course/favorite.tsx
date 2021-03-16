import React from 'react';

export const Favorite = ({ isFavorite }) => (
    <button>
        { isFavorite ? 'Favorited' : 'Make Favorite' }
    </button>
);
