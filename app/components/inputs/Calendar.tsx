"use client";

import React from "react";
import { Range, RangeKeyDict } from "react-date-range";

interface CalendarProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}

const Calendar: React.FC<CalendarProps> = ({
	value,
	onChange,
	disabledDates
}) => {
	return ( 
		<div></div>
	);
}

export default Calendar;