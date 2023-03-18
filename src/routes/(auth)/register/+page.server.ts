import { validateData } from '../../../lib/utils/index';
import type { Actions } from './$types';
import { registerSchema } from '$lib/utils/schema';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';

export const actions: Actions = {
	default: async ({ request }) => {
		const { formData, errors } = await validateData(await request.formData(), registerSchema);
		let isSeller: boolean;
		// if (formData.isSeller === 'on') {
		// 	isSeller = false;
		// }
		const { username, description, s, password, email, country, phone } = formData;
		console.log('data:', formData);
		if (s === 'on') {
			isSeller = true;
		} else {
			isSeller = false;
		}
		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		try {
			const user = await auth.createUser({
				primaryKey: {
					providerId: 'username',
					providerUserId: username,
					password: password
				},
				attributes: {
					username,
					email,
					country,
					phone,
					description,
					isSeller
				}
			});

			console.log(user);
		} catch (e) {
			console.log(e);
		}
		throw redirect(302, '/login');
	}
};
