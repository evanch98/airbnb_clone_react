import React from "react";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
	title,
	subtitle,
	showReset
}) => {
	return (
		<div>Empty</div>
	);
};

export default EmptyState;
