"use client";

import React, { useCallback } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
	return ( 
		<div></div>
	);
}

export default ImageUpload;
