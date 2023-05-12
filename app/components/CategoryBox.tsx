'use client';

import { IconType } from "react-icons";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon,
  label,
  selected
}) => {
  return ( 
    <div></div>
   );
}
 
export default CategoryBox;
