import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/navbar/ClientOnly";
import React from "react";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {

	const listing = await getListingById(params);
	const currentUser = await getCurrentUser();

	// if the listing is null, return the EmptyState component
	if (!listing) {
		return (
			<ClientOnly>
				<EmptyState />
			</ClientOnly>
		);
	}

	return ( 
		<ClientOnly>
			<ListingClient 
				listing={listing}
				currentUser={currentUser}
			/>
		</ClientOnly>
	);
}

export default ListingPage;
