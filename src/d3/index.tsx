import * as d3 from 'd3';
import {drawBarChart} from './barChart';
import {drawGraphChart} from './graphChart';

export const destroyChart = (selector: any) => {
    d3.select(selector).select('svg').remove();
}

export {drawBarChart, drawGraphChart};
