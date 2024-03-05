var longestCommonPrefix = function(strs) {
    let smallest = Infinity;
    let index;
    for (let i = 0; i < strs.length; i++){
        console.log(strs[i].length)
        if (smallest > strs[i].length) {
            console.log("called", i)
            smallest = strs[i].length
            index = i;
        };
    }
    console.log(strs[index])
};

longestCommonPrefix(["flower","flow","flight"]);