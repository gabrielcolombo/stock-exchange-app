class InvalidDateException extends ApplicationException {
  constructor() {
    super('Date must have the following format: dd/mm/yyyy.');
  }
}