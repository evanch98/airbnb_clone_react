"use client";

import useCountries from "@/app/hooks/useCountry";
import { SafeUser } from "@/app/types";
import React from "react";
import { IconType } from "react-icons";
import Avatar from "../Avatar";

interface ListingInfoProps {
	user: SafeUser;
	description: string;
	roomCount: number;
	guestCount: number;
	bathroomCount: number;
  locationValue: string;
  category: {
    icon: IconType;
    label: string;
    description: string;
  } | undefined;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
	user,
	description,
	roomCount,
	guestCount,
	bathroomCount,
	locationValue,
	category,
}) => {
	const { getByValue } = useCountries();

	const coordinates = getByValue(locationValue)?.latlng;

	return (
		<div className="col-span-4 flex flex-col gap-8">
			<div className="flex flex-col gap-2">
				<div
					className="
            text-xl
            font-semibold
            flex
            flex-row
            items-center
            gap-2
          "
				>
					<div>Hosted by {user?.name}</div>
					<Avatar src={user?.image}/>
				</div>
				<div
					className="
            flex
            flex-row
            items-center
            gap-4
            font-light
            text-neutral-500
          "
				>
					<div>{guestCount} guests</div>
					<div>{roomCount} rooms</div>
					<div>{bathroomCount} bathrooms</div>
				</div>
			</div>
			<hr />
			{category && (
				<ListingCategory 
					icon={category.icon}
					label={category.label}
					description={category.description}
				/>
			)}
		</div>
	);
};

export default ListingInfo;