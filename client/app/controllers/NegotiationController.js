class NegotiationController {
  constructor() {
    const $ = document.querySelector.bind(document);
    const self = this;

    this._dateInput = $('#date');
    this._amountInput = $('#amount');
    this._valueInput = $('#value');

    this._message = new Bind(
      new Message(),
      new MessageView('#message-view'),
      'text',
    );

    this._negotiations = new Bind(
      new Negotiations(),
      new NegotiationsView('#negotiations'),
      'add',
      'clear',
    );
  }

  add(event) {
    event.preventDefault();

    this._negotiations.add(this._createNegotiation());
    this._message.text = 'Negotiation added successfully!';
    
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

  clear() {
    this._negotiations.clear();
    
    this._message.text = 'Negotiations cleared sucessfully!';
  }
}