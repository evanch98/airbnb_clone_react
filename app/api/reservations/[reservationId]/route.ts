import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
  reservationId?: string
}

export async function DELETE(
	request: Request,
	{ params }: { params: IParams },
) {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return NextResponse.error();
	}

	const { reservationId } = params;

	if (!reservationId || typeof reservationId !== "string") {
		throw new Error("Invalid ID");
	}

	const reservation = await prisma.reservation.deleteMany({
		where: {
			id: reservationId,
			// to make sure that the user who can delete the reservation is either 
			// the currentUser or the user who posted the listing
			OR: [
				{ UserId: currentUser.id },
				{ listing: { userId: currentUser.id } },
			]
		}
	});

	return NextResponse.json(reservation);
}
