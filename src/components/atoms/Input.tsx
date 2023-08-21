'use client';
import React from 'react';

interface InputProps {
  placeholder: string;
  className?: string | undefined;
  icon?: any;
}

const RoundedInput: React.FC<InputProps> = ({
  placeholder,
  className,
  icon,
}) => {
  return (
    <fieldset>
      <input
        type='text'
        placeholder={placeholder}
        className={`rounded-3xl placeholder:text-primary_green bg-lighter_green focus:bg-white text-gray-800 h-12 px-4 ${className} focus:outline-[#AAA3A3] text-sm font-normal`}
      />
      <span>{icon} </span>
    </fieldset>
  );
};
export default RoundedInput;
