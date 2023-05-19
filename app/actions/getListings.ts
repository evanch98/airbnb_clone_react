import prisma from "@/app/libs/prismadb";

export interface IListingParams {
	userId?: string;
}

export default async function getListings() {
	try {
		// retrieve listings from the server
		const listings = await prisma.listing.findMany({
			orderBy: {
				createdAt: "desc"
			}
		});

		const safeListings = listings.map((listing) => ({
			...listing,
			createdAt: listing.createdAt.toISOString(),
		}));

		return safeListings;
	} catch (error: any) {
		throw new Error(error);
	}
}