class Negotiations {
  constructor(trap) {
    this._negotiations = [];
    this._trap = trap;

    Object.freeze(this);
  }

  get totalVolume() {
    return this._negotiations
      .reduce((total, { volume }) => total + volume, 0);
  }

  add(negotiation) {
    this._negotiations.push(negotiation);

    this._trap(this);
  }

  toArray() {
    return [].concat(this._negotiations);
  }

  clear() {
    this._negotiations.length = 0;

    this._trap(this);
  }
}