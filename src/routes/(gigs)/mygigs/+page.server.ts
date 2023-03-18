import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		gigs: await prisma.gig.findMany({
			include: {
				user: true
			}
		})
	};
};
