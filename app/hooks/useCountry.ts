import countries from "world-countries";

// return countries in a suitable format for this project from the
// countries of the package world-countries
const formattedCountries = countries.map((country) => ({
	value: country.cca2,
	label: country.name.common,
	flag: country.flag,
	latlng: country.latlng,
	region: country.region,
}));

// useCountries hook
const useCountries = () => {
	// return the formattedCountries to get all the countries
	const getAll = () => formattedCountries;

	// return the country by name
	const getByValue = (value: string) => {
		return formattedCountries.find((item) => item.value === value);
	};

	// return the object
	return {
		getAll,
		getByValue,
	};
};

export default useCountries;
