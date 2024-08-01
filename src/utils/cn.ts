import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const dn = (...args: ClassValue[]) => twMerge(clsx(...args));
