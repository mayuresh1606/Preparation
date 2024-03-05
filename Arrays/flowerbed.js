/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++){
        if (flowerbed[i] === 0){
            if (i !== 0 && i !== flowerbed.length - 1){
                if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0){
                    flowerbed[i] = 1;
                    count++;
                }
            }else{
                if (i === 0 && flowerbed[i] === 0 && flowerbed[i+1] === 0){
                    flowerbed[i] = 1;
                    count++;
                }
                if (i === flowerbed[flowerbed.length - i] && flowerbed[i - 1] === 0){
                    flowerbed[i] = 1;
                    count++;
                }
            }
        }
    }
    console.log(flowerbed)
    return n <= count;
};

console.log(canPlaceFlowers([1,0,0,0,1,0,0]), 2)