import React from 'react';
import Icon from '../common/Icon';
import { JANUARY_DATA, FEBRUARY_DATA, MARCH_DATA, APRIL_DATA, JULY_DATA } from '../common/Helper';

const monthDataMap = {
    January: JANUARY_DATA,
    February: FEBRUARY_DATA,
    March: MARCH_DATA,
    April: APRIL_DATA,
    July: JULY_DATA,
};

const Worksheet = ({ selectedMonth }) => {

    const data = monthDataMap[selectedMonth] || [];

    return (
        <div className="py-5">
            <div className="container">
                <h2 className='text-center dark:text-white text-black uppercase font-metal text-4xl tracking-wider drop-shadow-[0px_3px_0px_blue]'>{selectedMonth} Work</h2>
                <div className="flex flex-row -mx-3 mt-4 flex-wrap pt-10 w-full">
                    {data.map((item, index) => (
                        <div key={index} className="w-3/12 px-3 mt-6">
                            <div className="rounded-md p-2 border-2 dark:border-white border-gray-900 bg-gray-900 dark:bg-white">
                                <a href={item.link} rel="noreferrer" target='_blank' className='rounded-md border-white dark:border-gray-900 border-[1px] overflow-hidden group w-full flex'>
                                    <img src={item.image} alt={item.name} className='w-full group-hover:scale-105 duration-300 ease-linear' />
                                </a>
                                <div className="flex items-center justify-between pt-5 pb-2">
                                    <div className="font-bold font-fira text-2xl text-white dark:text-black flex items-end gap-1">
                                        <span className='font-metal text-3xl'>{`${index + 1}`}. </span>
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <a href={item.getHub_link} rel="noreferrer" target='_blank'>
                                            <Icon IconName="Git_hub" IconClass="w-10 h-10 flex fill-white dark:fill-black" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Worksheet;
