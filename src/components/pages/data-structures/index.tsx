import React, {useEffect, useRef, useState} from 'react';
import {Graph} from "../../../utils/graph";
import {destroyChart, drawGraphChart} from "../../../d3";

const DataStructuresPage: React.FC = () => {
    const [graph, setGraph] = useState(new Graph());
    const chart = useRef(null);

    graph.generateGraph(10);

    useEffect(() => {
        destroyChart(chart.current);
        drawGraphChart(chart.current, graph)
    }, [graph]);

    return <div>
        <h2 className={'text-light'}>Data Structures</h2>

        <div id="graph" ref={chart}/>
    </div>;
}

export default DataStructuresPage;