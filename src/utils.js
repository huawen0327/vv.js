
export function isObject(obj) {
  return obj && typeof obj === 'object' && Array.isArray(obj) === false
}