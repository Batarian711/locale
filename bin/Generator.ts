import IData from '@bin/IData';
import Output from '@bin/Output';

/**
 * Writes the provided data to the output location
 * @param output the output location to write to
 * @param
 */
type Generator = (output: Output | number, data: IData) => AsyncIterableIterator<string>;

export default Generator;
