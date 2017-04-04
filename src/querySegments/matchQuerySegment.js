import {QuerySegment} from './querySegment';

export class MatchQuerySegment extends QuerySegment {
  constructor($scope) {
    super($scope, "Match", "match", `
            <div class="gf-form">
              <label class="gf-form-label width-8" >NAME:</label>
              <input type="text" class="gf-form-input">
            </div>
            <div class="gf-form">
              <label class="gf-form-label width-8">AGGREGATION:</label>
              <input type="text" class="gf-form-input">
            </div>
            <div class="gf-form">
              <label class="gf-form-label width-8">ATTRIBUTES:</label>
              <input type="text" class="gf-form-input">
            </div>   
            <div class="gf-form">
              <label class="gf-form-label width-8">SETTINGS:</label>
              <input type="text" class="gf-form-input">
            </div>  
        `);
  }


}