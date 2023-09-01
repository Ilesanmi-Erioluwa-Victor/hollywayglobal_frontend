import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

const CustomSelect: React.FC<{
  options: Option[];
  onChange: (value: string) => void;
  disabled?: boolean;
}> = ({ options, onChange, disabled }) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className='relative w-full p-[10px]'>
      <select
        value={selectedValue}
        onChange={handleSelectChange}
        className='rounded-md border px-2 outline-none cursor-pointer text-[16px] w-full h-12'
        disabled={disabled}
      >
        <option value=''>Select an option</option>
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
