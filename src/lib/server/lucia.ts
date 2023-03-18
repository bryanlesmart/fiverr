import lucia from 'lucia-auth';
import prismaAdapter from '@lucia-auth/adapter-prisma';
import { dev } from '$app/environment';
import { prisma } from './prisma';

export const auth = lucia({
	adapter: prismaAdapter(prisma),
	env: dev ? 'DEV' : 'PROD',
	transformUserData: (userData) => {
		return {
			email: userData.email,
			username: userData.username,
			isSeller: userData.isSeller,
			country: userData.country,
			description: userData.description,
			phone: userData.phone
		};
	}
});

export type Auth = typeof auth;
