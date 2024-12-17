// src/app/courses/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import CourseCard from '../../components/CourseCard';

const CoursesPage = () => {
    const [courses, setCourses] = useState<any[]>([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const { data, error } = await supabase.from('courses').select('*');
            if (error) {
                console.error('Error fetching courses:', error);
            } else {
                setCourses(data);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center mb-8">Courses</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default CoursesPage;