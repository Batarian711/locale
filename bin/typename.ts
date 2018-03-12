import variable from '@bin/variable';
import capitalize from '@lib/capitalize';

export default function typename(value: string): string {
  return capitalize(variable(value));
}
