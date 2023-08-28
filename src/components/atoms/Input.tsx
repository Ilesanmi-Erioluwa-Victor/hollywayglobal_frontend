/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface InputProps {
  placeholder: string;
  className?: string | undefined;
  icon?: any;
  fieldsetClass?: string;
}

const RoundedInput: React.FC<InputProps> = ({
  placeholder,
  className,
  icon,
  fieldsetClass,
}) => {

   const handleInputSubmit = async (
     event: React.FormEvent<HTMLFormElement>
   ) => {
     event.preventDefault();
     try {
       console.log(event.target);
     } catch (error) {
       console.log(error);
     }
  };
  
  return (
    <form onSubmit={handleInputSubmit}
      className={`grow md:grow-0 relative  
      gap-2 flex items-center justify-between rounded-[4px]
      bg-[#F5F5F5] ${fieldsetClass}`}
    >
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
