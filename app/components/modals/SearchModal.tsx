"use client";

import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "./Modal";
import React, { useCallback, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Range } from "react-date-range";
import dynamic from "next/dynamic";
import { CountrySelectValue } from "../inputs/CountrySelect";
import qs from "query-string";
import { formatISO } from "date-fns";

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2,
}

const SearchModal = () => {
	const router = useRouter();
	const params = useSearchParams();
	const searchModal = useSearchModal();

	const [location, setLocation] = useState<CountrySelectValue>();
	const [step, setStep] = useState(STEPS.LOCATION);
	const [guestCount, setGuestCount] = useState(1);
	const [roomCount, setRoomCount] = useState(1);
	const [bathroomCount, setBathroomCount] = useState(1);
	const [dateRange, setDateRange] = useState<Range>({
		startDate: new Date(),
		endDate: new Date(),
		key: "selection"
	});

	const Map = useMemo(() => dynamic(() => import("../Map"), {
		ssr: false,
	}), [location]);

	const onBack = useCallback(() => {
		setStep((value) => value - 1);
	}, [setStep]);

	const onNext = useCallback(() => {
		setStep((value) => value + 1);
	}, [setStep]);

	const onSubmit = useCallback(async () => {
		if (step !== STEPS.INFO) {
			onNext();
		}

		let currentQuery = {};

		if (params) {
			currentQuery = qs.parse(params.toString());
		}

		const updatedQuery: any = {
			...currentQuery,
			locationValue: location?.value,
			guestCount,
			roomCount,
			bathroomCount,
		};

		if (dateRange.startDate) {
			updatedQuery.startDate = formatISO(dateRange.startDate);
		}

		if (dateRange.endDate) {
			updatedQuery.endDate = formatISO(dateRange.endDate);
		}

		const url = qs.stringifyUrl({
			url: "/",
			query: updatedQuery
		}, { skipNull: true });

		setStep(STEPS.LOCATION);
		searchModal.onClose();
		router.push(url);
	}, [
		step,
		searchModal,
		location,
		router,
		guestCount,
		roomCount,
		bathroomCount,
		dateRange,
		onNext,
		params
	]);

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