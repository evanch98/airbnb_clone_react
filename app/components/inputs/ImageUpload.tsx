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
		<div></div>
	);
}

export default ImageUpload;
