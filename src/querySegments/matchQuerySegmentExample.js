export class matchQuerySegmentExample {

  /**
   * @param {String} label Displayed query segment name
   * @param {String} name API query segment name
   * @param {String} template Editor template
   */
  constructor($scope) {
    this.label = 'Match';
    this.name = 'match';
  }
}

matchQuerySegmentExample.templateUrl = 'partials/matchQuerySegmentExample.html';