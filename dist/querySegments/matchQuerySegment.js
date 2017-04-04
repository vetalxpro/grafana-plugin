"use strict";

System.register(["./querySegment"], function (_export, _context) {
  "use strict";

  var QuerySegment, MatchQuerySegment;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_querySegment) {
      QuerySegment = _querySegment.QuerySegment;
    }],
    execute: function () {
      _export("MatchQuerySegment", MatchQuerySegment = function (_QuerySegment) {
        _inherits(MatchQuerySegment, _QuerySegment);

        function MatchQuerySegment($scope) {
          _classCallCheck(this, MatchQuerySegment);

          return _possibleConstructorReturn(this, (MatchQuerySegment.__proto__ || Object.getPrototypeOf(MatchQuerySegment)).call(this, $scope, "Match", "match", "\n            <div class=\"gf-form\">\n              <label class=\"gf-form-label width-8\" >NAME:</label>\n              <input type=\"text\" class=\"gf-form-input\">\n            </div>\n            <div class=\"gf-form\">\n              <label class=\"gf-form-label width-8\">AGGREGATION:</label>\n              <input type=\"text\" class=\"gf-form-input\">\n            </div>\n            <div class=\"gf-form\">\n              <label class=\"gf-form-label width-8\">ATTRIBUTES:</label>\n              <input type=\"text\" class=\"gf-form-input\">\n            </div>   \n            <div class=\"gf-form\">\n              <label class=\"gf-form-label width-8\">SETTINGS:</label>\n              <input type=\"text\" class=\"gf-form-input\">\n            </div>  \n        "));
        }

        return MatchQuerySegment;
      }(QuerySegment));

      _export("MatchQuerySegment", MatchQuerySegment);
    }
  };
});
//# sourceMappingURL=matchQuerySegment.js.map
