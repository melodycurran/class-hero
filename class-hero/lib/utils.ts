import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function compareObjects(obj1: {}, obj2: {}) {
  const arrayValue1 = Object.values(obj1)
  const arrayValue2 = Object.values(obj2)

  if (arrayValue1.length !== arrayValue2.length) return false

  const sort1 = arrayValue1.sort()
  const sort2 = arrayValue2.sort()

  if (JSON.stringify(sort1) !== JSON.stringify(sort2)) return false
  return true
}

export function getDifferentKeys<T extends object>(old: T, updated: T): (keyof T)[] {
  const differences: (keyof T)[] = []
  const allKeys = [...new Set([...Object.keys(old), ...Object.keys(updated)])] as (keyof T)[]

  for (const key of allKeys) {
    const originalValue = old[key]
    const updatedValue = updated[key]

    if (originalValue !== updatedValue) differences.push(key)
  }

  return differences
}
