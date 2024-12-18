'use client';

import { Auth } from '@supabase/ui';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { user } = Auth.useUser();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/auth'); // Redirect to login/signup page if not authenticated
        }
    }, [user, router]);

    if (!user) {
        return <div>Loading...</div>; // Show a loading state while redirecting
    }

    return <>{children}</>;
};

export default ProtectedRoute;
