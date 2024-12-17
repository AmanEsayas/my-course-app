// src/app/courses/page.tsx
'use client';  // Add this line at the top

import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import CourseCard from '../components/CourseCard';

const CoursesPage = () => {
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await supabase.from('courses').select('*');
      setCourses(data || []);
    };

    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} title={course.title} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
