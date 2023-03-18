import { handleHooks } from '@lucia-auth/sveltekit';
import { auth } from '$lib/server/lucia';
import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';

export const customHandle: Handle = async ({ event, resolve }) => {
	return resolve(event);
};

export const handle = sequence(handleHooks(auth), customHandle);
