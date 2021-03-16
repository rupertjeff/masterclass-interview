import React from 'react';
import { List } from '../list';
import { Course } from './index';

const toCourse = (item) => {
    const instructor = {
        imageUrl: item.instructor_image_url,
        name: item.instructor_name,
    };

    return <Course
        key={`course-${item.id}`}
        instructor={instructor}
        title={item.title}
    />;
};

export const CourseList = ({ data }) => {
    return <List
        flex={true}
        items={data.map(toCourse)}
    />
};
