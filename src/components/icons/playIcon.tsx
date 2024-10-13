
import React from 'react';

interface IconProps {
    size?: number;
    color?: string;
    className?: string;
}

const PlayIcon: React.FC<IconProps> = ({ size = 16, color = "#C0C0C0" , className }) => {
    return (
        <svg   className={className} width={size} height={size} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6501 0.451172C5.60554 0.451172 0.705811 5.35106 0.705811 11.3955C0.705811 17.4399 5.6057 22.3398 11.6501 22.3398C17.6945 22.3398 22.5944 17.4399 22.5944 11.3955C22.5944 5.35106 17.6945 0.451172 11.6501 0.451172ZM8.48192 6.21133L17.1221 11.3955L8.48192 16.5796V6.21133Z" fill={color}/>
        </svg>
    );
};

export default PlayIcon;