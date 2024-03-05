const maximumSubArray = (nums) => {
    let sum = -Infinity;
    let temp = [[]];
    let tempSum = nums[0];
    for (let i = 0; i < nums.length; i++){
        if (i !== 0) {
            if (tempSum + nums[i] > sum) {
                temp[0].push(nums[i])
                tempSum += nums[i];
            }
            if (tempSum > sum) sum = tempSum;
            tempSum += nums[i];
            if (tempSum > sum) sum = tempSum;
            temp[0].push(nums[i])
        };
    }
}