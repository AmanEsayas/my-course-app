// src/app/dashboard.tsx
'use client';

import ProtectedRoute from '../components/ProtectedRoute';

const Dashboard = () => {
    return (
        <ProtectedRoute>
            <div className="p-8">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p>Welcome to your dashboard!</p>
            </div>
        </ProtectedRoute>
    );
};

export default Dashboard;
