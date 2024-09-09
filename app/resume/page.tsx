import React from 'react';

const Resume = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <iframe
                src="/Resume-Kshitij Radotra.pdf"  // Assuming your resume is located in the public folder
                width="100%"
                height="100%"
                className="pdf-viewer"
            />
        </div>
    );
};

export default Resume;
