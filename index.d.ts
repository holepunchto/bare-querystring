export function parse(
  str: string,
  sep?: string,
  eq?: string
): Record<string, string | string[]>

export function decode(
  str: string,
  sep?: string,
  eq?: string
): Record<string, string | string[]>

export function stringify(obj: {}, sep?: string, eq?: string): string

export function encode(obj: {}, sep?: string, eq?: string): string
