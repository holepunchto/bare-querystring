/**
 * Parse a query string into an object, splitting pairs on `separator` (default `&`) and key/value
 * on `delimiter` (default `=`). `+` decodes to a space, keys and values are percent-decoded, and
 * repeated keys collect into an array.
 * @param input - Query string to parse.
 * @param separator - Substring that separates key/value pairs (default `'&'`).
 * @param delimiter - Substring that separates a key from its value (default `'='`).
 * @returns An object (with a `null` prototype) mapping decoded keys to decoded values; repeated
 * keys collect into an array.
 */
export function parse(
  input: string,
  separator?: string,
  delimiter?: string
): Record<string, string | string[]>

/**
 * Alias for `parse`.
 * @param input - Query string to parse.
 * @param separator - Substring that separates key/value pairs (default `'&'`).
 * @param delimiter - Substring that separates a key from its value (default `'='`).
 * @returns The parsed parameters, exactly as `parse` returns them.
 */
export function decode(
  input: string,
  separator?: string,
  delimiter?: string
): Record<string, string | string[]>

/**
 * Serialize an object into a query string, joining pairs with `separator` (default `&`) and
 * key/value with `delimiter` (default `=`). Array values produce one pair per element.
 * @param params - Object whose enumerable entries become key/value pairs; array values produce one
 * pair per element.
 * @param separator - Substring used to join key/value pairs (default `'&'`).
 * @param delimiter - Substring used to join a key to its value (default `'='`).
 * @returns The percent-encoded query string.
 */
export function stringify(params: {}, separator?: string, delimiter?: string): string

/**
 * Alias for `stringify`.
 * @param params - Object whose enumerable entries become key/value pairs; array values produce one
 * pair per element.
 * @param separator - Substring used to join key/value pairs (default `'&'`).
 * @param delimiter - Substring used to join a key to its value (default `'='`).
 * @returns The percent-encoded query string, exactly as `stringify` returns it.
 */
export function encode(params: {}, separator?: string, delimiter?: string): string
