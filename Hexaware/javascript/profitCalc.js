function profitCalc(arr){
    let buy = arr[0];
    let profit = 0;
    for (let i = 0; i < arr.length; i++){
        if ((arr[i] - buy) > profit){
            console.log("called", i)
            profit = arr[i] - buy;
        }
        if (buy > arr[i]){
            buy = arr[i];
        }
    }
    return profit;
}

console.log(profitCalc([8, 7, 7, 7, 6]))