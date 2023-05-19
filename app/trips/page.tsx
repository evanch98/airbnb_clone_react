import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/navbar/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import React from "react";


const TripsPage = async () => {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return (
			<ClientOnly>
				<EmptyState 
					title="Unauthorized"
					subtitle="Please login"
				/>
			</ClientOnly>
		);
	}

	const reservations = await getReservations({
		userId: currentUser.id,
	});

	if (reservations.length === 0) {
		return (
			<ClientOnly>
				<EmptyState 
					title="No trips found"
					subtitle="Looks like you haven't reserved any trips."
				/>
			</ClientOnly>
		);
	}

	return (
		<ClientOnly>
			<TripsClient 
				reservations={reservations}
				currentUser={currentUser}
			/>
		</ClientOnly>
	);
}
