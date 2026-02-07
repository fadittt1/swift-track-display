import React from 'react';
import logoImage from '@/assets/logo.png';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | number;
    withBackground?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
    className = "",
    size = 'md',
    withBackground = true
}) => {
    const sizeMap = {
        sm: 32,
        md: 40,
        lg: 48,
        xl: 56
    };

    const pixelSize = typeof size === 'number' ? size : sizeMap[size];

    return (
        <div
            className={`flex items-center justify-center rounded-full overflow-hidden border ${withBackground
                ? 'bg-white shadow-sm border-[#E5E7EB]'
                : 'bg-transparent border-transparent'
                } ${className}`}
            style={{
                width: pixelSize,
                height: pixelSize,
            }}
        >
            <img
                src={logoImage}
                alt="Brand Logo"
                className="w-full h-full object-contain p-2"
            />
        </div>
    );
};
