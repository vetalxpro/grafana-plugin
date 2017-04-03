'use strict';

System.register(['./libs/dateformat', './libs/hmac-sha256'], function (_export, _context) {
  "use strict";

  var dateFormat, crypto, _createClass, SignifaiServices;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_libsDateformat) {
      dateFormat = _libsDateformat.default;
    }, function (_libsHmacSha) {
      crypto = _libsHmacSha.default;
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

      _export('SignifaiServices', SignifaiServices = function () {
        function SignifaiServices(url, user_id, secret) {
          _classCallCheck(this, SignifaiServices);

          this.url = url;
          this.user_id = user_id;
          this.secret = secret;
        }

        /**
         * Get Authorization Headers for SignifAI API
         * @param {String} user_id 
         * @param {String} secret 
         * @param {String} method 
         * @returns {Object} headers
         */


        _createClass(SignifaiServices, [{
          key: 'getHeaders',
          value: function getHeaders(user_id, secret, method) {
            var now = dateFormat(new Date(), "GMT:ddd, dd mmm yyyy HH:MM:ss") + " GMT";
            var signatureString = [method, user_id, '', 'application/json', now].join(':');
            var hash = crypto.HmacSHA256(signatureString, secret.replace('\\"', '"'));
            var headers = {
              'Content-Type': 'application/json',
              'X-Signifai-Date': now,
              'Authorization': 'signifai '.concat(user_id).concat(':').concat(hash)
            };
            return headers;
          }
        }, {
          key: 'test',
          value: function test(callback) {
            this.request({
              method: 'POST',
              url: this.url + '/metrics',
              data: { namePrefix: '' }
            }, function (response) {

              if (404 === response.code) {
                callback({ status: "error", message: "Invalid URL" });
                return;
              }

              if (401 === response.code) {
                callback({ status: "error", message: response.message });
                return;
              }

              callback({ status: "success", message: "Successfully connected to SignifAI" });
            });
          }
        }, {
          key: 'request',
          value: function request(params, callback) {
            var method = params.method || 'GET';
            var url = params.url || '';
            var data = params.data || {};

            var xhr = new XMLHttpRequest();
            xhr.open(method, url);

            var headers = this.getHeaders(this.user_id, this.secret, method);
            xhr.setRequestHeader('Content-Type', headers['Content-Type']);
            xhr.setRequestHeader('X-Signifai-Date', headers['X-Signifai-Date']);
            xhr.setRequestHeader('Authorization', headers['Authorization']);

            xhr.onload = function () {
              callback(JSON.parse(xhr.response));
            };
            xhr.send(JSON.stringify(data));
          }
        }, {
          key: 'getMetricsSuggestions',
          value: function getMetricsSuggestions(name) {
            this.request({
              method: 'POST',
              url: this.url + '/suggest/metrics',
              data: {
                namePrefix: name,
                size: 10,
                from: '-20d'
              }
            }, function (response) {
              return response;
            });
          }
        }, {
          key: 'getAttributesSuggestion',
          value: function getAttributesSuggestion(name) {
            this.request({
              method: 'POST',
              url: this.url + '/suggest/attributes',
              data: {
                namePrefix: name,
                size: 10,
                from: '-20d'
              }
            }, function (response) {
              return response;
            });
          }
        }]);

        return SignifaiServices;
      }());

      _export('SignifaiServices', SignifaiServices);
    }
  };
});
//# sourceMappingURL=signifaiService.js.map
