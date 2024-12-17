"use client"; // Required for `page.tsx` if it uses client-only components

import CoursesList from "../components/CoursesList";

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Course App</h1>
      <CoursesList />
    </div>
  );
}
