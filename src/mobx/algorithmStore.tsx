import {makeAutoObservable} from "mobx";
import {createContext, useContext} from "react";
import {bubbleSort} from "../utils/sorting";

class AlgorithmsStore {
    entriesArrayLength = 100;
    entriesArray: number[] = [];

    constructor() {
        makeAutoObservable(this)

        this.fillEntriesArray();
    }

    get entriesAmount () {
        return this.entriesArrayLength
    }

    set entriesAmount (value) {
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
        this.entriesArray = [...bubbleSort(this.entriesArray)];
        console.log(this.entriesArray);
    }
}

const algorithmsObject = new AlgorithmsStore();

export const useAlgorithmsStore = () => useContext(createContext(algorithmsObject));