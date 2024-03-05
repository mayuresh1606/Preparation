// Brute Force

const firstNegativeNumber = (nums, k) => {
    for (let i = 0; i < nums.length - k + 1; i++){
        for (let j = i; j < i + k; j++){
            if (nums[j] < 0) {
                console.log(nums[j]);
                j = i + k - 1;
            };
        }
    }
}

// Sliding Window in while loop

const firstNegativeNumberWhile = (nums, k) => {
    let start = 0, end = 0;
    while (start <= nums.length - k){
        if (end - start < k){
            if (nums[end] < 0){
                console.log(nums[end]);
                if (end === nums.length - k){
                    end = start + k - 1;
                }else{
                    end = start;
                    start++;
                }
            }
        }else{
            start++;
            end = start - 1;
        }
        end++;
    }
}


firstNegativeNumberWhile([1, 2, -1, -2, 3, -3, 2, -2, -1, -4], 3);
// firstNegativeNumber([1, 2, -1, -2, 3, -3, 2, -2, -1, -4], 3);