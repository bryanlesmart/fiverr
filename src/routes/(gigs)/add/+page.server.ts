import { fail, redirect } from '@sveltejs/kit';
import { gigSchema } from './../../../lib/utils/schema';
import { validateData } from './../../../lib/utils/index';
import { prisma } from '$lib/server/prisma';
import type { Actions } from './$types';

export const actions: Actions = {
	addGigs: async ({ request, locals }) => {
		const { user } = await locals.validateUser();
		const { formData, errors } = await validateData(await request.formData(), gigSchema);
		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}
		const {
			title,
			description,
			features,
			short_description,
			price,
			deliverytime,
			category,
			revision_number
		} = formData;

		try {
			const gigs = await prisma.gig.create({
				data: {
					userId: user?.userId as string,
					title,
					description,
					features,
					short_description,
					price: Number(price),
					deliverytime,
					category,
					revision_number
				}
			});
			console.log(gigs);
		} catch (e) {
			console.log(e);
		}
		throw redirect(302, '/myGigs');
	}
};
