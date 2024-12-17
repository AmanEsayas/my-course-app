// src/components/CourseCard.tsx

interface CourseCardProps {
    course: {
        id: string;
        title: string;
        description: string;
    };
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    const getTitleColor = (title: string) => {
        const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
        const index = title.length % colors.length;
        return colors[index];
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg">
            <div
                className={`w-full h-48 ${getTitleColor(course.title)} flex items-center justify-center text-white font-bold text-xl rounded-t-lg`}
            >
                <span>{course.title}</span>
            </div>
            <div className="p-4">
                <p className="text-gray-700 text-base">{course.description}</p>
            </div>
            <div className="flex justify-between items-center pt-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition"
                >
                    Enroll
                </button>
            </div>
        </div>
    );
};

export default CourseCard;
