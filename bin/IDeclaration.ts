export default interface IDeclaration {
  /**
   * The descriptive name of the language interface
   */
  name: string;

  /**
   * The declaration to use for a variable that represents the language interface
   */
  variable: string;

  /**
   * The type name to use that can represent this language interface
   */
  typename: string;

  /**
   * The identifing short code for the language interface
   */
  value: string;
}
