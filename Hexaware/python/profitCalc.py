def profitCalc(arr):
    buy = arr[0]
    profit = 0
    for stock in arr:
        if (stock - buy) > profit:
            profit = stock - buy
        if stock < buy:
            buy = stock

    return profit

print(profitCalc([6, 6, 4, 3, 3]))