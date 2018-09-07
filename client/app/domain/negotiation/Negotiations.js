class Negotiations {
  constructor() {
    this._negotiations = [];
  }

  get totalVolume() {
    return this._negotiations
      .reduce((total, { volume }) => total + volume, 0);
  }

  add(negotiation) {
    this._negotiations.push(negotiation);
  }

  toArray() {
    return [].concat(this._negotiations);
  }
}