import React, { useState, useEffect } from 'react';
import Icon from '../common/Icon';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(prevMode => !prevMode)}
            className="p-2 rounded-full flex items-center justify-center shadow-md dark:shadow-black shadow-white bg-white"
        >
            {darkMode ? (
                <Icon IconName="Light_Mode" IconClass="w-6 h-6 text-yellow-500" />
            ) : (
                <Icon IconName="Dark_Mode" IconClass="w-6 h-6 text-white" />
            )}
        </button>
    );
};

export default DarkModeToggle;
