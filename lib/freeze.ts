interface ITest {
  a: number;
}

const valid: boolean = ((() => {
  try {
    const o: ITest = Object.freeze({ a: 1 });
    const s = new Set<ITest>([o]);
    return !!s.size;
  } catch {
    return false;
  }
})());

export function freeze<K, V>(a: Map<K, V>): ReadonlyMap<K, V>;
export function freeze<T>(a: Set<T>): ReadonlySet<T>;
export function freeze<T>(a: Array<T>): ReadonlyArray<T>;
export function freeze<T extends Function>(f: T): T;  // tslint:disable-line:ban-types
export function freeze<T>(o: T): Readonly<T>;

/**
 * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
 * @param o Object on which to lock the attributes
 * @returns the frozen object
 */
export function freeze<T>(o: T): Readonly<T> {
  return valid ? Object.freeze(o) : o;
}

export default freeze;
