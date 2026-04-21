import { Handshake, Trophy, Truck } from 'lucide-react';
import React from 'react';

const Card = ({ type, title }) => {
    const getIcon = () => {
        switch(type) {
            case "Handshake":
                return <Handshake size={48} />;
            case "Trophy":
                return <Trophy size={48} />;
            case "Truck":
                return <Truck size={48} />;
            default:
                return null;
        }
    };

    return (
        <div className='group flex flex-col gap-4 items-center text-center bg-linear-to-br from-white to-gray-50 p-6 lg:p-7 rounded-2xl shadow-lg hover:shadow-2xl hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 border border-gray-100 hover:border-indigo-200'>
            <div className='p-4 rounded-full bg-linear-to-r from-indigo-100 to-purple-100 group-hover:from-indigo-200 group-hover:to-purple-200 transition-colors duration-300 text-indigo-600 group-hover:text-purple-600'>
                {getIcon()}
            </div>
            <h2 className='text-lg font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300'>{title}</h2>
            <p className='text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300'>Premium & Trusted</p>
        </div>
    );
};

export default Card;