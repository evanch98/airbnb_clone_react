"use client";

import React from "react";
import { SafeUser } from "../types";

interface HeartButtonProps {
  listingId: string;
  currentUse?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
	listingId,
	currentUse,
}) => {
	return ( 
		<div></div>
	);
}

export default HeartButton;