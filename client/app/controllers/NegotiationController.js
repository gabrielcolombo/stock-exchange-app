class NegotiationController {
  constructor() {
    const $ = document.querySelector.bind(document);

    this._dateInput = $('#date');
    this._amountInput = $('#amount');
    this._valueInput = $('#value');

    this._negotiations = new Negotiations((model) => {
      this._negotiationsView.update(model);
    });

    this._negotiationsView = new NegotiationsView('#negotiations');
  
    this._message = new Message();
    this._messageView = new MessageView('#message-view');

    this._messageView.update(this._message);
  }

  add(event) {
    event.preventDefault();

    this._negotiations.add(this._createNegotiation());
    this._message.text = 'Negotiation added successfully!';
    
    this._negotiationsView.update(this._negotiations);

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
    this._messageView.update(this._message);
  }
}