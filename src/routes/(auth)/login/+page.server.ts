import { userSchema } from './../../../lib/utils/schema';
import { validateData } from './../../../lib/utils/index';
import { redirect, fail } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';
import type { Actions } from './$types';
import { LuciaError } from 'lucia-auth';

export const actions: Actions = {
	login: async ({ request, locals }) => {
		const { formData, errors } = await validateData(await request.formData(), userSchema);
		const { username, password } = formData;
		if (errors) {
			return fail(400, { data: formData, errors: errors.fieldErrors });
		}

		try {
			const key = await auth.useKey('username', username, password);
			const session = await auth.createSession(key.userId);
			locals.setSession(session);
		} catch (e) {
			const error = e as Error;
			if (
				(error instanceof LuciaError && error.message === 'AUTH_INVALID_KEY_ID') ||
				error.message === 'AUTH_INVALID_PASSWORD'
			) {
				return fail(400, { credentials: true });
			}
		}
		throw redirect(302, '/');
	}
};
