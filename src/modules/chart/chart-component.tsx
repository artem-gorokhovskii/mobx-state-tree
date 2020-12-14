import * as React from 'react';
import { observer } from 'mobx-react';
import { XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineSeries } from 'react-vis';
import { ChartTypes } from './chart-types';
import '../../../node_modules/react-vis/dist/style.css';

export const ChartComponent: React.FC<ChartTypes.Props> = observer((props) => {
    React.useEffect(() => {
        props.store.init();
        return props.store.reset;
    }, []);

    return (
        <XYPlot height={400} width={400}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={props.store.data.toJSON()} animation />
        </XYPlot>
    )
});
