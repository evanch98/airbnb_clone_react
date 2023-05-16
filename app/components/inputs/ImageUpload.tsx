/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useCallback } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  let cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
	onChange,
	value
}) => {
	const handleUpload = useCallback((result: any) => {
		onChange(result.info.secure_url);
	}, [onChange]);

	return ( 
		<CldUploadWidget 
			onUpload={handleUpload}
			uploadPreset=""
			options={{
				maxFiles: 1
			}}
		>
			{({ open }) => {
				return (
					<div
						onClick={() => open?.()}
						className="
							relative
							cursor-pointer
							hover:opacity-70
							transition
							border-dashed
							border-2
							p-20
							border-neutral-300
							flex
							flex-col
							justify-center
							items-center
							gap-4
							text-neutral-600
						"
					>
						<TbPhotoPlus />
					</div>
				);
			}}
		</CldUploadWidget>
	);
}

export default ImageUpload;
