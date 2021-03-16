import React, { useContext } from 'react';
import { List } from '../list';
import { Course } from './index';
import useSWR, { mutate } from 'swr';
import { fetcher } from '../../services/fetcher';
import { UserContext } from '../../contexts/user';

const toCourse = (email) => (item) => {
    const instructor = {
        imageUrl: item.instructor_image_url,
        name: item.instructor_name,
    };

    return <Course
        key={`course-${item.id}`}
        handleFavorite={handleFavorite(email, item.id, item.favorite)}
        instructor={instructor}
        isFavorite={item.favorite}
        title={item.title}
    />;
};

const handleFavorite = (email, course_id, isFavorite) => async () => {
    console.log('calling favorites...');
    if (isFavorite) {
        await fetcher('/favorite', {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, course_id }),
        });
    } else {
        await fetcher('/favorite', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, course_id }),
        });
    }

    console.log('mutate!');
    return await mutate(`courses?email=${email}`);
};

export const CourseList = () => {
    const { email } = useContext(UserContext);
    const { data, error } = useSWR(`courses?email=${email}`, fetcher);

    if (error) {
        console.log(error);
        return <div>Oops!</div>;
    }

    if (!data) {
        return <div>Loading</div>;
    }
    return <List
        flex={true}
        items={data.map(toCourse(email))}
    />
};
