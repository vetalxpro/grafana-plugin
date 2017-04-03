'use strict';

System.register(['./datasource', './query_ctrl'], function (_export, _context) {
  "use strict";

  var GenericDatasource, GenericDatasourceQueryCtrl, GenericConfigCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_datasource) {
      GenericDatasource = _datasource.GenericDatasource;
    }, function (_query_ctrl) {
      GenericDatasourceQueryCtrl = _query_ctrl.GenericDatasourceQueryCtrl;
    }],
    execute: function () {
      _export('ConfigCtrl', GenericConfigCtrl = function GenericConfigCtrl() {
        _classCallCheck(this, GenericConfigCtrl);
      });

      GenericConfigCtrl.templateUrl = 'partials/config.html';

      _export('Datasource', GenericDatasource);

      _export('QueryCtrl', GenericDatasourceQueryCtrl);

      _export('ConfigCtrl', GenericConfigCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
