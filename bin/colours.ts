export interface IColours {
  [name: string]: string;
}

const colours: IColours = {
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  black: '\x1b[30m',
  reset: '\x1b[0m',
};

export default colours;
