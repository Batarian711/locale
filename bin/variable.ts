import { remove as diacritics } from 'diacritics';

export default function variable(value: string): string {
  const lower = value.toLowerCase();
  const latin = diacritics(lower);
  return latin.replace(/[\W]+([\w])?/g, (_, r) => (r || '').toUpperCase());
}
