// src/components/CoursesList.tsx
"use client"; // Add this at the top to ensure it is treated as a client component

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

interface Course {
    id: number;
    title: string;
    description: string;
}

const CoursesList = () => {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const { data, error } = await supabase.from("courses").select("*");
            if (error) {
                console.error("Error fetching courses:", error);
            } else {
                setCourses(data || []);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div>
            <h2>Courses</h2>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CoursesList;
