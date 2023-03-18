import { redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';
import type { Actions } from './$types';

export const actions: Actions = {
	login: async ({ request, locals }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');
		try {
			const key = await auth.useKey('username', username as string, password as string);
			const session = await auth.createSession(key.userId);
			locals.setSession(session);
		} catch (e) {
			console.log(e);
		}
		throw redirect(302, '/');
	}
};
