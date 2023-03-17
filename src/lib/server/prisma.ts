import { PrismaClient } from '@prisma/client';
import { env } from '$env/dynamic/private';
import { globals } from 'svelte/internal';

const prisma = globals.__prisma || new PrismaClient();

if (env.NODE_ENV === 'development') {
	globals.__prisma = prisma;
}

export { prisma };
