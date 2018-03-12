import { PathLike as FsPathLike } from 'fs';

type Output = FsPathLike | NodeJS.WriteStream | number;

export default Output;
