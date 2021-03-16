import React from 'react';

import { InstructorImage } from 'components/instructor/image';
import { InstructorName } from 'components/instructor/name';

import { CourseBase } from './course-base';
import { CourseTitle } from './title';

export const Course = ({ instructor, title }) => (
    <CourseBase>
        <InstructorImage instructor={ instructor }/>
        <InstructorName instructor={ instructor }/>
        <CourseTitle>{ title }</CourseTitle>
    </CourseBase>
);
