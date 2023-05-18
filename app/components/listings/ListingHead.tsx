"use client";

import { SafeUser } from "@/app/types";
import React from "react";

interface ListingHeadProps {
  title: string;
  imageSrc: string;
  locationValue: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
	title,
	imageSrc,
	locationValue,
	id,
	currentUser,
}) => {
	return ( 
		<div>Listing Head</div>
	);
}

export default ListingHead;