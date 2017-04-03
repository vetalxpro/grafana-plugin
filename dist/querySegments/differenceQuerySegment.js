"use strict";

System.register(["./querySegment"], function (_export, _context) {
    "use strict";

    var QuerySegment, DifferenceQuerySegment;

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
            _export("DifferenceQuerySegment", DifferenceQuerySegment = function (_QuerySegment) {
                _inherits(DifferenceQuerySegment, _QuerySegment);

                function DifferenceQuerySegment($scope) {
                    _classCallCheck(this, DifferenceQuerySegment);

                    return _possibleConstructorReturn(this, (DifferenceQuerySegment.__proto__ || Object.getPrototypeOf(DifferenceQuerySegment)).call(this, $scope, "Difference", "difference", "\n            <label class=\"gf-form-label\">Difference Selected</label>\n        "));
                }

                return DifferenceQuerySegment;
            }(QuerySegment));

            _export("DifferenceQuerySegment", DifferenceQuerySegment);
        }
    };
});
//# sourceMappingURL=differenceQuerySegment.js.map
