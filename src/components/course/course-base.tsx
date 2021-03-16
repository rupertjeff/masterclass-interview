import React from 'react';

export const CourseBase = ({ children, onClick }) => (
    <div className="m-1 p-1 bg-gray-200 rounded" onClick={ onClick }>
        { children }
    </div>
);
