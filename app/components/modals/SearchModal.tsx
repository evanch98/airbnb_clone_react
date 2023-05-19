"use client";

import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "./Modal";
import React from "react";

const SearchModal = () => {
	const searchModal = useSearchModal();
	return ( 
		<Modal
			isOpen={searchModal.isOpen}
			onClose={searchModal.onClose}
			onSubmit={searchModal.onOpen}
			title="Filters"
			actionLabel="Search"
		/>
	);
}

export default SearchModal;