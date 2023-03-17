import { auth } from '$lib/server/lucia';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { handleHooks } from '@lucia-auth/sveltekit';

export const customHandle: Handle = async ({ event, resolve }) => {
	return resolve(event);
};

export const handle = sequence(customHandle, handleHooks(auth));
