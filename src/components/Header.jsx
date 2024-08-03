import React, { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { MONTHS } from '../common/Helper';

const Header = ({ selectedMonth, setSelectedMonth }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleMonthSelect = (month) => {
        setSelectedMonth(month);
        setIsDropdownOpen(false);
    };

    return (
        <div className='pt-5 pb-16 sm:pb-5'>
            <div className="container">
                <nav className='flex items-center justify-between bg-gray-900 dark:bg-white rounded-full px-5 py-3'>
                    <div className="">
                        <img src="" alt="" />
                        <h2 className='font-merienda font-bold text-xl dark:text-black text-white'>
                            Vikas Jakhar -[513]
                        </h2>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="absolute top-24 right-4 sm:relative sm:top-auto sm:right-auto">
                            <div className="relative z-10">
                                <button
                                    onClick={toggleDropdown}
                                    className='text-white text-xl font-fira font-bold shadow-md dark:shadow-black shadow-white dark:text-black bg-gray-700 dark:bg-gray-300 duration-300 ease-linear hover:shadow-blue-500 dark:hover:shadow-blue-500 px-4 py-2 rounded-lg'
                                >
                                    {selectedMonth}
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-300 dark:border-gray-700">
                                        {MONTHS.map((month, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleMonthSelect(month)}
                                                className="block w-full text-left text-base font-fira px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 text-black dark:text-white"
                                            >
                                                {month}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <DarkModeToggle />
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
