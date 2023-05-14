'use client';

import useCountries from "@/app/hooks/useCountry";
import Select from "react-select";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
}

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChange
}) => {
  // extract getAll from the useCountries hook
  const { getAll } = useCountries();
  return ( 
    <div>
      <Select 
        placeholder="Anywhere"
        isClearable
        options={getAll()}
      />
    </div>
  );
}

export default CountrySelect;
