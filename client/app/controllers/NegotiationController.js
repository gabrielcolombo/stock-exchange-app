class NegotiationController {
  constructor() {
    const $ = document.querySelector.bind(document);

    this._negotiations = new Negotiations();

    this._dateInput = $('#date');
    this._amountInput = $('#amount');
    this._valueInput = $('#value');
  }

  add(event) {
    event.preventDefault();

    this._negotiations.add(this._createNegotiation());

    this._clearForm();
  }

  _createNegotiation() {
    return new Negotiation(
      DateConverter.toDate(this._dateInput.value),
      parseInt(this._amountInput.value),
      parseFloat(this._valueInput.value)
    );
  }

  _clearForm() {
    this._dateInput.value = '';
    this._amountInput.value = 1;
    this._valueInput.value = 0.0;

    this._dateInput.focus();
  }
}