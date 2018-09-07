class NegotiationController {
  constructor() {
    const $ = document.querySelector.bind(document);

    this._dateInput = $('#date');
    this._amountInput = $('#amount');
    this._valueInput = $('#value');
  }

  add(event) {
    event.preventDefault();

    const negotiation = new Negotiation(
      DateConverter.toDate(this._dateInput.value),
      parseInt(this._amountInput.value),
      parseFloat(this._valueInput.value)
    );

    const formattedDate = DateConverter.toText(negotiation.date);

    console.log(formattedDate);
  }
}