// [1, -2, 4, 5, -1, 1]   4
// [1, -2, 5, -1, 1]   5


function positiveMedian(arr){
    let baseIndex = false;
    let endIndex = false;
    for (let i = 0; i < arr.length; i++){
        console.log(i)
        if (baseIndex !== false && endIndex === false && arr[i] < 0){
            endIndex = i
        }
        if (baseIndex === false && arr[i] < 0){
            baseIndex = i;
        }
    }
    if (baseIndex !== false && endIndex !== false){
        return arr[baseIndex + 1]
    }
    return arr[Math.floor(arr.length / 2)]
}

console.log(positiveMedian([1, -2, 5, -1, 1]))