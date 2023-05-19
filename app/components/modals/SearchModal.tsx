"use client";

import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "./Modal";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2,
}

const SearchModal = () => {
	const router = useRouter();
	const params = useSearchParams();
	const searchModal = useSearchModal();

	const [step, setStep] = useState(STEPS.LOCATION);
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