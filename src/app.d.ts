import type { PrismaClient } from '@prisma/client';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			validate: import('@lucia-auth/sveltekit').Validate;
			ValidateUser: import('@lucia-auth/sveltekit').ValidateUser;
			SetSession: import('@lucia-auth/sveltekit').SetSession;
		}
		// interface PageData {}
		// interface Platform {}
	}

	declare namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;
		type UserAttributes = {
			email: string;
			username: string;
			isSeller: boolean;
			userId: string;
		};
	}

	// eslint-disable-next-line no-var
	var __prisma: PrismaClient;
}

export {};
