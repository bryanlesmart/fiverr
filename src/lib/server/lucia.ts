import { lucia } from 'lucia-auth/auth';
import prismaAdapter from '@lucia-auth/adapter-prisma';
import { dev } from '$app/environment';
import { prisma } from './prisma';

export const auth = lucia({
	adapter: prismaAdapter(prisma),
	env: dev ? 'DEV' : 'PROD',
	transformUserData: (userData) => {
		return {
			userId: userData.id,
			email: userData.email,
			username: userData.username,
			isSeller: userData.isSeller
		};
	}
});

export type Auth = typeof auth;
