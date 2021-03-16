import React from 'react';

// Random placeholder fallback and magic numbers. For the purposes of MVP
// I'm choosing to not spend more time on this.
export const InstructorImage = ({ instructor }) => (
    <figure>
        <img
            src={ instructor.imageUrl || '//placekitten.com/150/150' }
            alt={ instructor.name }
            width={ 150 }
            height={ 150 }
        />
    </figure>
);
