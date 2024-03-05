const maxSumSubArray = (arr, k) => {
    let newArr = []
    for (let i = 0; i < arr.length - k + 1; i++){
        let temp = []
        for (let j = i; j < i + 2; j++){
            temp.push(arr[j]);
        }
        newArr.push(temp);
    }
    let max = 0;
    for (let i = 0; i < newArr.length; i++){
        let temp = 0;
        for (let j = 0; j < newArr[i].length; j++){
            temp += newArr[i][j];
        }
        if (temp > max) max = temp;
    }
    console.log(newArr)
    return max;
}

// console.log(maxSumSubArray([10, 3, 7, 3, 9, 5, 1, 2, 6], 2));
// [2, 3, 5, 1, 2, 6, 7, 3, 8]


// sliding has 2 types i.e fixed size and variable size

// sliding window approach:

// const maxSumSubArraySlideWhile = (nums, k) => {
//     let start = 0, end = 0;
//     let sum = 0;
//     let max = -Infinity;
//     while (end < nums.length){
//         sum += nums[end];
//         if (end - start + 1 < k){
//             end++;
//         }else if (end - start + 1 === k){
//             if (sum > max){
//                 max = sum;
//             }
//             sum = sum - nums[start];
//             start++;
//             end++
//         }
//     }
//     return max;
// }

const maxSumSubArraySlideWhile = (nums, k) => {
    let start = 0, end = 0, sum = 0, max = 0;
    while (end < nums.length){
        sum += nums[end];
        if (end - start + 1 === k){
            if (sum > max) max = sum;
            sum -= nums[start];
            start++;
        }
        end++;
    }
    console.log(max);
}

maxSumSubArraySlideWhile([10, 3, 7, 3, 9, 5, 1, 2, 6], 2);


// const maxSumSubArraySlideFor = (nums, k) => {
//     let start = 0, end = 0;
//     let sum = 0;
//     let max = -Infinity;
//     for (end; end < nums.length; end++){
//         sum += nums[end];
//         if (end - start + 1 === k){
//             if (sum > max) max = sum;
//             sum -= nums[start];
//             start++;
//         }
//     }
//     return max
// }


const maxSumSubArraySlideFor = (nums, k) => {
    let start = 0, end = 0;
    let sum = 0;
    let max = 0;
    for (end; end < nums.length; end++){
        sum += nums[end];
        if (end - start + 1 === k){
            if (sum > max) max = sum;
            sum -= nums[start];
            start++;
        }
    }
    return max;
}

// console.log(maxSumSubArraySlideFor([10, 3, 7, 3, 9, 5, 1, 2, 6], 4))