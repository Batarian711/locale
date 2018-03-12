import IData from '@bin/IData';

/**
 * Provides normalized locale data that can be used to generate output
 */
type Provider = () => Promise<IData>;

export default Provider;
