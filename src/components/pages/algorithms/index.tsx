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
                    <input
                        type="text"
                        value={store.entriesArrayLength}
                        min={10}
                        max={1000}
                        onChange={(e) => store.setEntriesAmount(parseInt(e.target.value) || 0)}
                    />
                </div>
                <div className="algorithms">
                    <button onClick={() => store.applyBubbleSort()}>Bubble</button>
                    <button onClick={() => destroyChart(chart.current)}>Destroy chart</button>
                </div>
            </div>

            {Object.values(store.sortingState).map((e: any) => <>
                <p>{e.type}</p>
                <p>{e.state}</p>
                <p>{e.time}</p>
            </>)}
        </section>

        <section id={'chart'} ref={chart} />
    </div>;
});

export default Algorithms;