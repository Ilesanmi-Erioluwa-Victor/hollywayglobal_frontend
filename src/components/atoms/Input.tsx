/* eslint-disable @typescript-eslint/no-explicit-any */
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
    <form className='grow md:grow-0 relative  gap-2 flex items-center justify-between rounded-[4px]  bg-[#F5F5F5]'>
      <input
        type='text'
        placeholder={placeholder}
        className={`
        text-[#000000] h-10 ${className} px-[1.5rem] bg-inherit  text-[14px] font-[400] 
        focus:outline-none
        text-center md:text-left w-[100%]
        `}
      />
      <button
        type='submit'
        className='cursor-pointer pr-[4px]'
      >
        {icon}{' '}
      </button>
    </form>
  );
};
export default RoundedInput;
