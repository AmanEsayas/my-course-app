interface CourseCardProps {
    course: {
        id: number;
        title: string;
        description: string;
    };
}

const CourseCard = ({ course }: CourseCardProps) => {
    return (
        <div className="p-4 bg-white rounded shadow-md">
            <h2 className="text-xl font-bold">{course.title}</h2>
            <p>{course.description}</p>
        </div>
    );
};

export default CourseCard;
