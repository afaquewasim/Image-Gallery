import React, { useEffect, useState } from 'react';

const Loading = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading process
        setTimeout(() => {
            setLoading(false);
        }, 3000); // Change the time (in milliseconds) as needed
    }, []);

    return (
        <div className="flex items-center justify-center h-screen">
            {loading ? (
                <div className="flex items-center">
                    <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                    <p className="ml-3">Loading...</p>
                </div>
            ) : (
                <div>
                    {/* Replace this with your actual content that needs to be loaded */}
                    <h1 className="text-4xl font-bold text-center">Loaded Content</h1>
                </div>
            )}
        </div>
    );
};

export default Loading;
