"use client";

import React, { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SafeReservation, SafeUser } from "../types";
import Heading from "../components/Heading";
import Container from "../components/Container";
import ListingCard from "../components/listings/ListingCard";

interface ReservationClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser;
}

const ReservationClient: React.FC<ReservationClientProps> = ({
	reservations,
	currentUser,
}) => {
	const router = useRouter();
	const [deletingId, setDeletingId] = useState("");
  
	const onCancel = useCallback((id: string) => {
		setDeletingId(id);

		axios.delete(`/api/reservations/${id}`)
			.then(() => {
				toast.success("Reservation cancelled");
				router.refresh();
			})
			.catch(() => {
				toast.error("Something went wrong.");
			})
			.finally(() => {
				setDeletingId("");
			});
	}, [router, setDeletingId]);

	return ( 
		<Container>
			<Heading 
				title="Reservations"
				subtitle="Bookings on your properties"
			/>
		</Container>
	);
}

export default ReservationClient;
