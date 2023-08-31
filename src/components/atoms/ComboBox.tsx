import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface ComboBoxProps {
  options: Option[];
  onSelect: (option: Option) => void;
}

const ComboBox: React.FC<ComboBoxProps> = ({ options, onSelect }) => {
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
    <div className='combo-box'>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Type to search...'
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
