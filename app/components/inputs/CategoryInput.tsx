'use client';

import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon,
  label,
  selected,
  onClick
}) => {
  return ( 
    <div></div>
  );
}

export default CategoryInput;