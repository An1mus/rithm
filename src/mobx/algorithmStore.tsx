import {makeAutoObservable} from "mobx";
import {createContext, useContext} from "react";
import {bubbleSort} from "../utils/sorting";

enum SORTING_STATES {
    IDLE= "Idle",
    SORTING = "Sorting",
    COMPLETED = "Completed",
    ABORTED = "Aborted"
}

enum SORT_ALGORITHMS {
    BUBBLE = "Bubble"
}

class AlgorithmsStore {
    entriesArrayLength = 10;
    entriesArray: number[] = [];

    sortingState: any = {};

    constructor() {
        makeAutoObservable(this)

        this.fillEntriesArray();
    }

    private __addSortType(type: SORT_ALGORITHMS, state: SORTING_STATES, time?: number) {
        this.sortingState[type] = {type, state, time: time !== undefined ? time : 'Counting'}
    }

    setEntriesAmount (value: number) {
        this.entriesArrayLength = value
        this.fillEntriesArray();
    }

    fillEntriesArray () {
        const result = [];
        for(let i = 0; i < this.entriesArrayLength; i++) {
            result.push(Math.round(Math.random() * this.entriesArrayLength));
        }

        this.entriesArray = result;
    }

    applyBubbleSort () {
        const start = new Date();
        this.__addSortType(SORT_ALGORITHMS.BUBBLE, SORTING_STATES.SORTING);

        try {
            this.entriesArray = [...bubbleSort(this.entriesArray)];
        } catch (e) {
            this.__addSortType(SORT_ALGORITHMS.BUBBLE, SORTING_STATES.ABORTED)
        }
        const end = new Date();

        this.__addSortType(SORT_ALGORITHMS.BUBBLE, SORTING_STATES.COMPLETED, end.getTime() - start.getTime());
    }
}

const algorithmsObject = new AlgorithmsStore();

export const useAlgorithmsStore = () => useContext(createContext(algorithmsObject));