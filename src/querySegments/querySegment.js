export class QuerySegment {

    /**
     * @param {String} label Displayed query segment name
     * @param {String} name API query segment name
     * @param {String} template Editor template
     */
    constructor($scope, label, name, template) {
        this.label = label;
        this.name = name;
        $scope.templates[name] = template;
    }
}