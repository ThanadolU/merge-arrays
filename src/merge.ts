export function merge(
    collection1: number[], 
    collection2: number[], 
    collection3: number[]
): number[] {
    const collection2Asc = [];
    for (let i = collection2.length - 1; i >= 0; i--) {
        collection2Asc.push(collection2[i]);
    }

    return mergeThreeSortedArray(collection1, collection2Asc, collection3);
}

function mergeThreeSortedArray(
    a: number[],
    b: number[],
    c: number[]
): number[] {
    const result: number[] = [];
    let i = 0, j = 0, k = 0;

    while (i < a.length || j < b.length || k < c.length) {
        const values: {value: number, from: 'a' | 'b' | 'c'}[] = [];

        if (i < a.length) {
            values.push({value: a[i], from: 'a'});
        }
        if (j < b.length) {
            values.push({value: b[j], from: 'b'});
        }
        if (k < c.length) {
            values.push({value: c[k], from: 'c'});
        }

        // console.log(values);

        let min = values[0];
        for (const v of values) {
            if (v.value < min.value) {
                min = v;
            }
        }

        // console.log(result);

        result.push(min.value);

        if (min.from === 'a') {
            i++;
        } else if (min.from === 'b') {
            j++;
        } else {
            k++;
        }
    }

    return result;
}