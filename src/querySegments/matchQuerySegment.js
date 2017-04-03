import { QuerySegment } from './querySegment';

export class MatchQuerySegment extends QuerySegment {
    constructor($scope) {
        super($scope, "Match", "match", `
            <label class="gf-form-label">Match Selected</label>
        `);
    }
}