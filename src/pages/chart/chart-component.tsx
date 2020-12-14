import * as React from 'react';
import makeInspectable from 'mobx-devtools-mst';
import { Chart, ChartStore } from '../../modules/chart';
import { ChartTypes } from './chart-types';
import { RoutesPaths } from '../routes';
import './chart-styles.css'

const chartStore = ChartStore.create({
    data: [],
})

makeInspectable(chartStore);

export const ChartComponent: React.FC<ChartTypes.Props> = (props) => {
    const returnToMainPage = React.useCallback(() => {
        props.history.push(RoutesPaths.MAIN_PATH);
    }, [props.history]);

    return (
        <div className="page-chart">
            <Chart store={chartStore} />
            <button
                className="page-chart__button"
                onClick={returnToMainPage}
            >
                return to main page
            </button>
        </div>
    )
};