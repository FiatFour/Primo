let collection_1: number[] = [5, 8, 2];
let collection_2: number[] = [10, 1, 7];

const merge = (collection_1: number[], collection_2: number[]): number[] => {
  for (let i = 0; i < collection_2.length; i++) {
    collection_1.push(collection_2[i]);
  }
  return collection_1;
};

function sort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const merged = merge(collection_1, collection_2);

console.log(sort(merged));