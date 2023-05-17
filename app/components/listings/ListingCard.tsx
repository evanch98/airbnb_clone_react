"use client";

import useCountries from "@/app/hooks/useCountry";
import { SafeUser } from "@/app/types";
import { Listing, Reservation } from "@prisma/client";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";

interface ListingCardProps {
	data: Listing;
	reservation?: Reservation;
	onAction?: (id: string) => void;
	disabled?: boolean;
	actionLabel?: string;
	actionId?: string;
	currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
	data,
	reservation,
	onAction,
	disabled,
	actionLabel,
	actionId = "",
	currentUser,
}) => {
	const router = useRouter();
	const { getByValue } = useCountries();

	// the location is stored as a value in the Listing object; therefore,
	// retrieve the location by using the getByValue from the  useCountries
	// hook
	const location = getByValue(data.locationValue);

	const handleCancel = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			e.stopPropagation();

			if (disabled) {
				return;
			}

			onAction?.(actionId);
		},
		[disabled, onAction, actionId]
	);

	const price = useMemo(() => {
		if (reservation) {
			return reservation.totalPrice;
		}

		return data.price;
	}, [reservation, data]);

	const reservationDate = useMemo(() => {
		if (!reservation) {
			return null;
		}

		const start = new Date(reservation.startDate);  // start date
		const end = new Date(reservation.endDate);  // end date

		return `${format(start, "PP")} - ${format(end, "PP")}`
	}, [reservation]);

	return <div>Listing Card</div>;
};

export default ListingCard;
