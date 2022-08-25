const insertionSort = (data: number[]) => {
    for(let i = 1; i < data.length; i ++) {
        const key = data[i];
        let j = i - 1;

        while( j >= 0 && key < data[j]) {
            data[j + 1] = data[j];
            j = j - 1;
        }

        data[j + 1] = key;
    }

    return data;
}

export default insertionSort;