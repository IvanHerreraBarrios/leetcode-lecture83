//[7,6,4,3,1]
/*
min = 4
max = 0
price = 3

*/

var maxProfit = function(prices) {
    let min = Infinity
    let max = 0
    for(let price of prices) {
        max = Math.max(max, price - min)
        min = Math.min(min, price)
    }
    return max
    
};

var maxProfit = function (prices) {
    //let myMap = new Map();
    let maxProfit=0;
    let minPrice = prices[0];

    for (let i = 0; i < prices.length; i++) {

        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        else {
            if ((prices[i] - minPrice) > maxProfit) {
                maxProfit = prices[i] - minPrice;
            }

        }
    }

    return maxProfit;

};