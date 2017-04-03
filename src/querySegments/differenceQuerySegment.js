import { QuerySegment } from './querySegment';

export class DifferenceQuerySegment extends QuerySegment {
    constructor($scope) {
        super($scope, "Difference", "difference", `
            <label class="gf-form-label">Difference Selected</label>
        `);
    }
}