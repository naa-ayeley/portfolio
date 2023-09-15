/* eslint-disable */
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(name: string) {
  const split = name.toUpperCase().split(" ")
  if (split.length === 1) return split[0][0]
  const first = split[0]
  const last = split[split.length - 1]
  return first[0] + last[0]
}
