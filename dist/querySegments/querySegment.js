"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var QuerySegment;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export("QuerySegment", QuerySegment =

            /**
             * @param {String} label Displayed query segment name
             * @param {String} name API query segment name
             * @param {String} template Editor template
             */
            function QuerySegment($scope, label, name, template) {
                _classCallCheck(this, QuerySegment);

                this.label = label;
                this.name = name;
                $scope.templates[name] = template;
            });

            _export("QuerySegment", QuerySegment);
        }
    };
});
//# sourceMappingURL=querySegment.js.map
