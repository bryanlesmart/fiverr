import { z } from 'zod';

export const registerSchema = z.object({
	username: z.string().min(1, { message: 'Username is required' }),
	email: z.string().email({ message: 'Email is invalid' }),
	password: z.string().min(1, { message: 'Username is required' }),
	country: z.string().min(1, { message: 'Username is required' }),
	phone: z.string().min(1, { message: 'Username is required' }),
	description: z.string().min(1, { message: 'Username is required' }),
	s: z.string().optional()
});

export const userSchema = z.object({
	username: z.string().min(1, { message: 'Username is required' }),
	password: z.string().min(1, { message: 'Username is required' })
});
