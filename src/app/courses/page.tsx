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
                console.error(error);
            } else {
                setCourses(data || []);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default CoursesPage;
