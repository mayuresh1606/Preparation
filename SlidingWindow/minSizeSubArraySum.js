// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray
// whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

const minSizeSubArraySum = (target, nums) => {
    let start = 0, end = 0, sum = 0, length = nums.length;
    for (end; end < nums.length; end++){
        sum += nums[end];
        if (sum >= target){
            // console.log(sum);
            if (length > end - start + 1){
                length = end - start + 1
                console.log(nums.slice(start, end + 1))
            };
            sum = 0;
            start++;
            end = start;
            sum += nums[end];
        }
    }
    console.log(length, "length")
    return length ? length : 0;
}

minSizeSubArraySum(7, [2,3,1,2,4,3]);