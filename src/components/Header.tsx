// src/components/Header.tsx
'use client';

import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

const Header = () => {
    const { user, signOut } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        await signOut();
        router.push('/login');
    };

    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">My Course App</h1>
                <nav>
                    {user ? (
                        <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
                            Logout
                        </button>
                    ) : (
                        <a href="/login" className="text-blue-300">
                            Login
                        </a>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
