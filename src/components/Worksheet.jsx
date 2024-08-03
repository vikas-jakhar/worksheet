import React from 'react';
import Icon from '../common/Icon';
import { FEBRUARY_DATA, MARCH_DATA, APRIL_DATA, JULY_DATA, MAY_DATA, JUNE_DATA } from '../common/Helper';

const monthDataMap = {
    February: FEBRUARY_DATA,
    March: MARCH_DATA,
    April: APRIL_DATA,
    May: MAY_DATA,
    June: JUNE_DATA,
    July: JULY_DATA,
};

const Worksheet = ({ selectedMonth }) => {

    const data = monthDataMap[selectedMonth] || [];

    return (
        <div className="py-5">
            <div className="container flex flex-col items-center">
                <h2 className='text-center dark:text-white text-black uppercase font-metal text-4xl tracking-wider drop-shadow-[0px_3px_0px_blue]'>{selectedMonth} Work</h2>
                <div className="flex flex-row -mx-3 mt-4 flex-wrap pt-10 w-full justify-center">
                    {data.map((item, index) => (
                        <div key={index} className="xl:w-3/12 lg:w-4/12 sm:w-6/12 w-full max-w-[450px] sm:max-w-100% px-3 mt-6">
                            <div className="rounded-md p-2 h-full border-2 dark:border-white border-gray-900 bg-gray-900 dark:bg-white duration-300 ease-linear hover:shadow-[7px_7px_2px] hover:shadow-[gray]">
                                <a href={item.link} rel="noreferrer" target='_blank' className='rounded-md border-white dark:border-gray-900 border-[1px] overflow-hidden group w-full flex'>
                                    <img src={item.image} alt={item.name} className='w-full group-hover:scale-105 duration-300 ease-linear' />
                                </a>
                                <div className="flex items-center justify-between pt-5 pb-2">
                                    <div className="font-bold font-fira text-xl md:text-2xl text-white dark:text-black flex items-end gap-1">
                                        <span className='font-metal text-2xl md:text-3xl'>{`${index + 1}`}. </span>
                                        <p>{item.name}</p>
                                    </div>
                                    <a href={item.getHub_link} rel="noreferrer" target='_blank' className='duration-300 ease-linear hover:shadow-[4px_4px_2px] hover:shadow-[gray]  rounded-full'>
                                        <Icon IconName="Git_hub" IconClass="md:w-10 md:h-10 w-7 h-7 flex fill-white dark:fill-black" />
                                    </a>
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
