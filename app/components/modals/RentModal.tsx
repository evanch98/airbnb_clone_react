/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";
import { useMemo, useState } from "react";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";
import { FieldValues, useForm } from "react-hook-form";
import CountrySelect from "../inputs/CountrySelect";
import dynamic from "next/dynamic";
import Counter from "../inputs/Counter";

// steps of renting a home
enum STEPS {
	CATEGORY = 0,
	LOCATION = 1,
	INFO = 2,
	IMAGES = 3,
	DESCRIPTION = 4,
	PRICE = 5,
}

const RentModal = () => {
	// hook
	const rentModal = useRentModal();

	// by default, the renting process start from choosing the category
	const [step, setStep] = useState(STEPS.CATEGORY);

	// form
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
		reset,
	} = useForm<FieldValues>({
		defaultValues: {
			category: "",
			location: null,
			guestCount: 1,
			roomCount: 1,
			bathRoomCount: 1,
			imageSrc: "",
			price: 1,
			title: "",
			description: "",
		},
	});

	// these are extracted from the useForm to watch and subscribe
	const category = watch("category");
	const location = watch("location");
	const guestCount = watch("guestCount");

	// import Map this way to be able to work with the leaflet package
	// import Map dynamically
	const Map = useMemo(
		() =>
			dynamic(() => import("../Map"), {
				ssr: false,
			}),
		[location]
	);

	// to set the value of the category
	const setCustomValue = (id: string, value: any) => {
		setValue(id, value, {
			shouldValidate: true,
			shouldDirty: true,
			shouldTouch: true,
		});
	};

	// one step back
	const onBack = () => {
		setStep((value) => value - 1);
	};

	// one step backward
	const onNext = () => {
		setStep((value) => value + 1);
	};

	// return the actionLabel string appropriately depending on the current step of the user
	const actionLabel = useMemo(() => {
		// if the current step is the price step, it means it is the last step
		// therefore, the actionLabel should be as follows
		if (step === STEPS.PRICE) {
			return "Create";
		}

		// otherwise, the actionLabel should be as follows
		return "Next";
	}, [step]);

	// return the secondaryActionLabel string appropriately depending on the current step of the user
	const secondaryActionLabel = useMemo(() => {
		// if the current step is the category step, it means it is the first step
		// therefore, the secondaryActionLabel should be undefined
		if (step === STEPS.CATEGORY) {
			return undefined;
		}

		// otherwise, the secondaryActionLabel should be as follows
		return "Back";
	}, [step]);

	// Body content
	let bodyContent = (
		<div className="flex flex-col gap-8">
			<Heading
				title="Which of these best describes your place?"
				subtitle="Pick a category"
			/>
			<div
				className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
			>
				{categories.map((item) => (
					<div key={item.label} className="col-span-1">
						<CategoryInput
							onClick={(category) => setCustomValue("category", category)}
							selected={category === item.label}
							label={item.label}
							icon={item.icon}
						/>
					</div>
				))}
			</div>
		</div>
	);

	// Location step
	if (step === STEPS.LOCATION) {
		bodyContent = (
			<div className="flex flex-col gap-8">
				<Heading
					title="Where is your place located?"
					subtitle="Help guests find you!"
				/>
				<CountrySelect
					value={location}
					onChange={(value) => setCustomValue("location", value)}
				/>
				<Map center={location?.latlng} />
			</div>
		);
	}

	// Info step
	if (step === STEPS.INFO) {
		bodyContent = (
			<div className="flex flex-col gap-8">
				<Heading 
					title="Share some basics about your place"
					subtitle="What amenities do you have?"
				/>
				<Counter 
					title="Guests"
					subtitle="How many guests do you allow?"
					value={guestCount}
					onChange={(value) => setCustomValue("guestCount", value)}
				/>
			</div>
		);
	}

	return (
		<Modal
			isOpen={rentModal.isOpen}
			onClose={rentModal.onClose}
			onSubmit={onNext}
			actionLabel={actionLabel}
			secondaryActionLabel={secondaryActionLabel}
			secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
			title="Airbnb your home!"
			body={bodyContent}
		/>
	);
};

export default RentModal;
