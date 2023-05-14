/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
	icon: Icon,
	label,
	selected
}) => {
	const router = useRouter();
	const params = useSearchParams();

	// this function will generate an appropriate url depending the category user selected
	const handleClick = useCallback(() => {
		let currentQuery = {};  // empty query

		// parse the params string so that they are objects
		if (params) {
			currentQuery = qs.parse(params.toString());
		}

		// spread the currentQuery, and add the new category
		const updatedQuery: any = {
			...currentQuery,
			category: label
		}

		// if the user clicks on the same category again, remove the current category (rest it)
		if (params?.get("category") === label) {
			delete updatedQuery.category;
		}

		// generate the url string
		const url = qs.stringifyUrl({
			url: "/",
			query: updatedQuery
		}, { skipNull: true });

		router.push(url);
	}, [params, label, router]);
	return (
		<div
			onClick={handleClick}
			className={`
        flex
        flex-col
        items-center
        justify-center
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected ? "border-b-neutral-800" : "border-transparent"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}
      `}
		>
			<Icon size={26} />
			<div className="font-medium text-sm">
				{label}
			</div>
		</div>
	);
}

export default CategoryBox;
