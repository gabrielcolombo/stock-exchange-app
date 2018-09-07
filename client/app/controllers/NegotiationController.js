class NegotiationController {
  constructor() {
    const $ = document.querySelector.bind(document);

    this._dateInput = $('#date');
    this._amountInput = $('#amount');
    this._valueInput = $('#value');
  }

  add(event) {
    event.preventDefault();

    const date = new Date(
      ...this._dateInput.value
      .split('-')
      .map((item, index) => item - index % 2)
    );

    console.log(date);
    // const negotiation = new Negotiation(
    //   ,
    //   parseInt(this._amountInput.value),
    //   parseFloat(this._valueInput.value)
    // );
  }
}