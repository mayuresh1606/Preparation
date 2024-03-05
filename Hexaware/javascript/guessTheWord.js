function guessTheWord(n, string){
    let stringsArr = string.split(" ")
    let index = 0;
    let length = -Infinity;
    let updated = false;
    for (const word of stringsArr){
        if (word.length % 2 !== 0){
            if (length < word.length){
                length = word.length
                index = stringsArr.indexOf(word);
                updated = true;
            };
        }
    }
    if (!updated) return "Better Luck Next Time"
    else return stringsArr[index];
}


console.log(guessTheWord(5, "Helo Good Mornin Welcum Yu"))