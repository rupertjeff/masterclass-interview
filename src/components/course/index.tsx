import React from 'react';

import { InstructorImage } from 'components/instructor/image';
import { InstructorName } from 'components/instructor/name';

import { CourseBase } from './course-base';
import { CourseTitle } from './title';
import { Favorite } from './favorite';

export const Course = ({ handleFavorite, instructor, isFavorite = false, title }) => (
    <CourseBase onClick={ handleFavorite }>
        <InstructorImage instructor={ instructor }/>
        <InstructorName instructor={ instructor }/>
        <CourseTitle>{ title }</CourseTitle>
        <Favorite isFavorite={ isFavorite }/>
    </CourseBase>
);
