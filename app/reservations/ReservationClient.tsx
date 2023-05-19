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
