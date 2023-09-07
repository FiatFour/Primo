var collection_1 = [5, 8, 2];
var collection_2 = [10, 1, 7];
var merge = function (collection_1, collection_2) {
    for (var i = 0; i < collection_2.length; i++) {
        collection_1.push(collection_2[i]);
    }
    return collection_1;
};
function sort(arr) {
    for (var i = 1; i < arr.length; i++) {
        for (var j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var merged = merge(collection_1, collection_2);
console.log(sort(merged));
