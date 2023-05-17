"use client";

import useCountries from "@/app/hooks/useCountry";
import { SafeUser } from "@/app/types";
import { Listing, Reservation } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";

interface ListingCardProps {
  data: Listing;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disable?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
	data,
	reservation,
	onAction,
	disable,
	actionLabel,
	actionId,
	currentUser,
}) => {
	const router = useRouter();
	const { getByValue } = useCountries();

	// the location is stored as a value in the Listing object; therefore, 
	// retrieve the location by using the getByValue from the  useCountries 
	// hook
	const location = getByValue(data.locationValue);


	return ( 
		<div>Listing Card</div>
	);
}

export default ListingCard;