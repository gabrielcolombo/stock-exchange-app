import { HttpService } from '../../util/HttpService.js';
import { Negotiation } from './Negotiation.js';

export class NegotiationService {
  constructor() {
    this._http = new HttpService();
  }

  getWeekNegotiations() {
    return this._http
      .get('negotiations/week')
      .then(negotiations => negotiations
        .map(({ date, amount, value }) => new Negotiation(new Date(date), amount, value))
      )
      .catch(err => {
        throw new ApplicationException('An error occurred while fetching this week\'s negotiations.')
      });
  }

  getPreviousWeekNegotiations() {
    return this._http
      .get('negotiations/previous')
      .then(negotiations => negotiations
        .map(({ date, amount, value }) => new Negotiation(new Date(date), amount, value))
      )
      .catch(err => {
        throw new ApplicationException('An error occurred while fetching previous week\'s negotiations.')
      });
  }

  getFortnightNegotiations() {
    return this._http
      .get('negotiations/fortnight')
      .then(negotiations => negotiations
        .map(({ date, amount, value }) => new Negotiation(new Date(date), amount, value))
      )
      .catch(err => {
        throw new ApplicationException('An error occurred while fetching previous week\'s negotiations.')
      });
  }

  async getPeriodNegotiations() {
    try {
      const period = await Promise.all([
        this.getWeekNegotiations(),
        this.getPreviousWeekNegotiations(),
        this.getFortnightNegotiations()
      ]);

      return period
        .reduce((arr, item) => arr.concat(item), [])
        .sort((a, b) => a.date.getTime() - b.date.getTime());
    } catch(err) {
      throw new ApplicationException('An error occurred while fetching the negotiations for the period.');
    }
  }
}
