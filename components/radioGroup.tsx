"use client"
import clsx from "clsx";
import { useState } from "react";

interface RadioGroupItemProps {
  value: string;
  id: string;
  label: string;
  name: string;
  onChange: (value: string) => void;
  checked: boolean;
}

const RadioGroupItem: React.FC<RadioGroupItemProps> = ({
  value,
  id,
  label,
  name,
  onChange,
  checked,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="form-radio w-4 h-4"
      />
      <label htmlFor={id} className="text-zinc-400 font-semibold">{label}</label>
    </div>
  );
};

interface RadioGroupProps {
  options: { value: string; label: string }[]; 
  defaultValue: string;
  name: string;
  className?: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, defaultValue, name, className, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className={clsx("space-y-2", className)}>
      {options.map((option) => (
        <RadioGroupItem
          key={option.value}
          value={option.value}
          id={option.value}
          label={option.label}
          name={name}
          onChange={handleChange}
          checked={selectedValue === option.value}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
