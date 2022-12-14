function maxProfit(prices: number[]): number {
    let leftPointer: number = 0;
    let rightPointer: number = 1;
    let maxProfit: number = 0;

    while (rightPointer < prices.length) {
        if (prices[leftPointer] < prices[rightPointer]) {
            let profit: number = prices[rightPointer] - prices[leftPointer];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        } else {
            leftPointer = rightPointer;
        }
        rightPointer++;
    }
    return maxProfit;
}
