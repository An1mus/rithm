import React, {useEffect, useRef} from 'react';
import {drawBarChart, destroyChart} from "../../../d3";

const Algorithms: React.FC = () => {
    const chart = useRef(null);
    const data = [5, 6, 10, 21, 3, 2, 4, 5]

    useEffect(() => {
        drawBarChart(chart.current, data);

        return () => destroyChart(chart.current)
    }, [])

    return <>
        <h1>Hey there</h1>
        <div id={'chart'} ref={chart} />
    </>;
}

export default Algorithms;