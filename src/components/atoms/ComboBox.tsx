import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface ComboBoxProps {
  options: Option[];
  onSelect: (option: Option) => void;
  name: string;
}

const ComboBox: React.FC<ComboBoxProps> = ({ options, onSelect, name }) => {
  const [inputValue, setInputValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setIsDropdownOpen(value.length > 0);
  };

  const handleOptionSelect = (option: Option) => {
    setInputValue(option.label);
    setIsDropdownOpen(false);
    onSelect(option);
  };

  return (
    <div className='relative w-[200px] my-0 mx-auto'>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Type to search...'
        name={name}
        className='w-full
  p-[8px]
  text-[14px]
  border-[1px]  border-solid border-[#ccc] outline-none'
      />
      {isDropdownOpen && (
        <ul className='dropdown'>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComboBox;
