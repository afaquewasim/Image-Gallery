import React from 'react';

const NoImageFound = () => {
    const clickTry = (e) =>{
        e.preventDefault();
        window.location.reload()
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">No Image Found</h1>
                <p className="text-lg text-gray-600">Sorry, the image you are looking for is not available.</p>
                <button onClick={clickTry} className="flex-shrink-0 my-2 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">Try Again</button>
            </div>
        </div>
    );
};

export default NoImageFound;
