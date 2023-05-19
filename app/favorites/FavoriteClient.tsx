"use client";

import React from "react";
import { SafeListing, SafeUser } from "../types";
import Container from "../components/Container";
import Heading from "../components/Heading";

interface FavoriteClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavoriteClient: React.FC<FavoriteClientProps> = ({
	listings,
	currentUser,
}) => {
	return ( 
		<Container>
			<Heading 
				title="Favorites"
				subtitle="List of places you have favorited!"
			/>
		</Container>
	);
}

export default FavoriteClient;
