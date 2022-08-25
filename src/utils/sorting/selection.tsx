const selectionSort = (data: number[]): number[] => {
    for(let i = 0; i < data.length; i++) {
        for(let j = i + 1; j < data.length; j++) {
            if(data[j] < data[i]) {
                let temp = data[i];
                data[i] = data[j];
                data[j] = temp;
            }
        }
    }

    return data;
}

export default selectionSort;