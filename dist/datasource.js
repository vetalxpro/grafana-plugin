"use strict";

System.register(["lodash", "./signifaiService"], function (_export, _context) {
  "use strict";

  var _, SignifaiServices, _createClass, GenericDatasource;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_lodash) {
      _ = _lodash.default;
    }, function (_signifaiService) {
      SignifaiServices = _signifaiService.SignifaiServices;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export("GenericDatasource", GenericDatasource = function () {
        function GenericDatasource(instanceSettings, $q, backendSrv, templateSrv) {
          _classCallCheck(this, GenericDatasource);

          this.q = $q;
          this.backendSrv = backendSrv;
          this.templateSrv = templateSrv;

          // SignifAI Services
          var url = instanceSettings.url;
          var user_id = instanceSettings.jsonData.user_id;
          var secret = instanceSettings.jsonData.secret;
          this.signifaiServices = new SignifaiServices(url, user_id, secret);
        }

        _createClass(GenericDatasource, [{
          key: "query",
          value: function query(options) {
            return Promise.resolve([]);
          }
        }, {
          key: "testDatasource",
          value: function testDatasource() {
            var _this = this;

            return this.q(function (resolve, reject) {
              _this.signifaiServices.test(function (response) {
                resolve({
                  title: "SignifAI Datasource",
                  status: response.status,
                  message: response.message
                });
              });
            });
          }
        }, {
          key: "metricsSuggestion",
          value: function metricsSuggestion(name) {
            var response = this.signifaiServices.getMetricsSuggestions(name);
            return Promise.resolve(response);
          }
        }, {
          key: "attributesSuggestion",
          value: function attributesSuggestion(name) {
            var response = this.signifaiServices.getAttributesSuggestion(name);
            return Promise.resolve(response);
          }
        }]);

        return GenericDatasource;
      }());

      _export("GenericDatasource", GenericDatasource);
    }
  };
});
//# sourceMappingURL=datasource.js.map
