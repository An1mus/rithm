import React, {useEffect, useRef} from 'react';
import {drawBarChart, destroyChart} from "../../../d3";
import { observer } from "mobx-react-lite";
import {useAlgorithmsStore} from '../../../mobx';

import './index.css';

const Algorithms: React.FC = observer(() => {
    const chart = useRef(null);
    const store = useAlgorithmsStore();

    useEffect(() => {
        drawBarChart(chart.current, store.entriesArray);

        return () => destroyChart(chart.current)
    }, [store.entriesArray]);

    return <div className={'algorithms'}>
        <section className="controls">
            <h2 className={'text-light'}>Sorting algorithms</h2>

            <div>
                <div className="settings">
                    <input type="text" />
                </div>
                <div className="algorithms">
                    <button onClick={() => store.applyBubbleSort()}>Bubble</button>
                    <button onClick={() => destroyChart(chart.current)}>Destroy chart</button>
                </div>
            </div>
        </section>

        <section id={'chart'} ref={chart} />
    </div>;
});

export default Algorithms;