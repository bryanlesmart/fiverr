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

export const gigSchema = z.object({
	title: z.string().min(1, { message: 'Title is required' }),
	category: z.string().min(1, { message: 'Category is required' }),
	description: z.string().min(1, { message: 'Description is required' }),
	deliverytime: z.string().min(1, { message: 'Delivery Time is required' }),
	short_description: z.string().min(1, { message: 'Short Desc is required' }),
	revision_number: z.string().min(1, { message: 'Revision Number is required' }),
	features: z.string().min(1, { message: 'Features is required' }),
	price: z.string().min(1, { message: 'Price is required' })
});
