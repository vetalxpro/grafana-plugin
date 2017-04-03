'use strict';

System.register(['./querySegments/querySegment', './querySegments/matchQuerySegment', './querySegments/differenceQuerySegment'], function (_export, _context) {
    "use strict";

    var QuerySegment, MatchQuerySegment, DifferenceQuerySegment, SignifaiQuery;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_querySegmentsQuerySegment) {
            QuerySegment = _querySegmentsQuerySegment.QuerySegment;
        }, function (_querySegmentsMatchQuerySegment) {
            MatchQuerySegment = _querySegmentsMatchQuerySegment.MatchQuerySegment;
        }, function (_querySegmentsDifferenceQuerySegment) {
            DifferenceQuerySegment = _querySegmentsDifferenceQuerySegment.DifferenceQuerySegment;
        }],
        execute: function () {
            _export('SignifaiQuery', SignifaiQuery = function SignifaiQuery($scope) {
                _classCallCheck(this, SignifaiQuery);

                $scope.templates = [];
                this.fragments = [new MatchQuerySegment($scope), new DifferenceQuerySegment($scope)];
            });

            _export('SignifaiQuery', SignifaiQuery);
        }
    };
});
//# sourceMappingURL=signifaiQuery.js.map
