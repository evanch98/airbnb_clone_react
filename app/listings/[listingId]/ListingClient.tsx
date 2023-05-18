import { SafeListing, SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";
import React from "react";

interface ListingClientProps {
  reservation?: Reservation[];
  listing: SafeListing & {
    user: SafeUser
  };
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
	listing,
	currentUser,
}) => {
	return ( 
		<div>Listing Client</div>
	);
}

export default ListingClient;