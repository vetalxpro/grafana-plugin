import { QuerySegment } from './querySegments/querySegment';
import { MatchQuerySegment } from './querySegments/matchQuerySegment';
import { DifferenceQuerySegment } from './querySegments/differenceQuerySegment';

/*

{
    label: 'Match',
    value: 'match'
},
{
    label: 'Difference',
    value: 'difference'
},
{
    label: 'Sum',
    value: 'sum'
},
{
    label: 'Time Shift',
    value: 'time_shift'
},
{
    label: 'First',
    value: 'first'
},
{
    label: 'Last',
    value: 'last'
},
{
    label: 'Natural Logarithm',
    value: 'ln'
},
{
    label: 'Logarithm Base 2',
    value: 'log2'
},
{
    label: 'Logarithm Base 10',
    value: 'log10'
},
{
    label: 'Square Root',
    value: 'sqrt'
},
{
    label: 'Absolute Value',
    value: 'abs'
},
{
    label: 'DBSCAN',
    value: 'dbscan'
},
{
    label: 'Robust Fit',
    value: 'robustFit'
},
{
    label: 'Find Change Points',
    value: 'findChangePts'
},
{
    label: 'Hampel',
    value: 'hampel'
},
{
    label: 'Holt-Winters',
    value: 'holtwinters'
},
{
    label: 'Rolling Standard Deviation',
    value: 'rolling_stdev'
},
{
    label: 'Rolling Mean',
    value: 'rolling_mean'
},
{
    label: 'Rolling Geometric Mean',
    value: 'rolling_geomean'
},
{
    label: 'Rolling Percentile',
    value: 'rolling_percentile'
},
{
    label: 'Rolling Min',
    value: 'rolling_min'
},
{
    label: 'Rolling Max',
    value: 'rolling_max'
},
{
    label: 'Rolling Kurtosis',
    value: 'rolling_kurtosis'
},
{
    label: 'Rolling Skewness',
    value: 'rolling_skewness'
},
{
    label: 'Rolling Sum',
    value: 'rolling_sum'
},
{
    label: 'Rolling Variance',
    value: 'rolling_variance'
},
{
    label: 'Rolling Z-Score',
    value: 'rolling_zscore'
},
{
    label: 'Rolling Rate of Change',
    value: 'rolling_rate_of_change'
},
{
    label: 'Rolling Exponential Moving Average',
    value: 'rolling_ewma'
}

*/

export class SignifaiQuery {
    constructor($scope) {
        $scope.templates = [];
        this.fragments = [
            new MatchQuerySegment($scope),
            new DifferenceQuerySegment($scope)
        ];
    }
}