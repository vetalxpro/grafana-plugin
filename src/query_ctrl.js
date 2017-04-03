import { QueryCtrl } from 'app/plugins/sdk';
import { SignifaiQuery } from './signifaiQuery';

export class GenericDatasourceQueryCtrl extends QueryCtrl {

  constructor($scope, $injector, templateSrv, $q, uiSegmentSrv) {
    super($scope, $injector);

    this.scope = $scope;
    this.uiSegmentSrv = uiSegmentSrv;

    this.signifaiQuery = new SignifaiQuery($scope);

    this.target = this.target;
    this.target.rootQueryFragment = this.target.rootQueryFragment;
  }

  getCollapsedText() {
    return this.target.query;
  }
}

GenericDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';