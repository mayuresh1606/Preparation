function frogs(s, sI, eI){
    let tempStrArr = [];
    let returningArr = [];
    for (let i = 0; i < sI.length; i++){
        tempStrArr.push(s.slice(sI[i] - 1, eI[i]));
    }
    for (let i = 0; i < tempStrArr.length; i++){
        let count = 0;
        console.log(tempStrArr[i])
        tempStrArr[i].split("|").forEach((element) => {
            if (element === "*"){
                count++
            }
        })
        returningArr.push(count);
    }
    return returningArr;
}

console.log(frogs("|**|*|", [1, 1], [5, 6]))