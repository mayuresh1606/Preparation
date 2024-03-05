def guessTheWord(n, string):
    stringsArr = string.split(" ")
    length = 0
    index = 1
    updated = False
    print(stringsArr)
    for word in stringsArr:
        if len(word) % 2 != 0 and len(word) > length:
            length = len(word)
            index = stringsArr.index(word)
            updated = True
    if (updated):
        return stringsArr[index]
    else:
        return "Better Luck Next Time"


print(guessTheWord(5, "Helo Good Mornin Welcum Yu"))