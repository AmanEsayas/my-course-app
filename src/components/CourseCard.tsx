// src/components/CourseCard.tsx
import React from 'react';

interface CourseCardProps {
    title: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title }) => {
    // Generate a random color for each course title
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="bg-black rounded-lg shadow-lg overflow-hidden">
                <div
                    className={`${randomColor} text-white text-center py-16`}
                    style={{ minHeight: '150px' }}
                >
                    <h3 className="text-2xl font-bold">{title}</h3>
                </div>
                <div className="p-4">
                    <p className="text-gray-300">Some description or course details can go here.</p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
