class tradeReconciliation {
  akunaTrades = {}; //{tradeProduct: {time: quanitity}}
  exchangeTrades = {}; // {exchange: {tradeProduct: {time: quantity}} }

  process(line) {
    debugger;
    const input = line.split(',');
    if (input.length === 4) {
      const name = input[0];
      const product = input[1];
      const quantity = input[2];
      const time = input[3];
      let trade = {};
      trade[time] = quantity;

      if (name === 'AKUNA') {

        if (this.akunaTrades[product] === undefined) {
          this.akunaTrades[product] = trade;
        } else {
          this.akunaTrades[product][time] = quantity;
        }
      } else {
        if (this.exchangeTrades[name] === undefined) {
          this.exchangeTrades[name] = {}
        } else {
          this.exchangeTrades[name] = product;
        }

        if (this.exchangeTrades[name][product] === undefined) {
          this.exchangeTrades[name][product] = trade;
        } else {
          this.exchangeTrades[name][product][time] = quantity;
        }
      }

      return quantity;
    } else {
      const command = input[0];
      let exchange1 = input[1];
      let exchange2 = input[2];
      let count = 0;

      if (exchange2 === 'AKUNA') {
        const temp = exchange1;
        exchange1 = exchange2;
        exchange2 = temp;
      }
      //if (exchange1 === 'AKUNA') {
      const akunaKeys = Object.keys(this.akunaTrades);
      for (var i = 0; i < akunaKeys.length; i++) {
        const tradeProduct = akunaKeys[i]; //object of times and quantity of trades
        const exchange = this.exchangeTrades[exchange2];
        const tradeKeys = Object.keys(tradeProduct);

        if (exchange === undefined || exchange[tradeProduct] === undefined) {
          count = count + tradeKeys.length;
        } else {
          //iterate time stamps and quantity in tradeProduct
          for (var i = 0; i < tradeKeys.length; i++) {
            const akunaTradeTime = tradeKeys[i];
            const exchangeTradeTime = exchange[tradeProduct][akunaTradeTime];
            if (exchangeTradeTime === undefined) {
              count++;
            }
          }

        }
      }

      return count;
    }
  }
}

var test = new tradeReconciliation();
var result = [];
var input = [
  'AKUNA,A,10,12:01:00',
  'AKUNA,B,-15,12:05:00',
  'RECONCILIATION,AKUNA,EXCHANGE1',
  'RECONCILIATION,EXCHANGE1,AKUNA',
  'EXCHANGE1,B,-15,12:05:00',
  'EXCHANGE1,B,-20,12:07:00',
  'RECONCILIATION,EXCHANGE1,AKUNA',
  'RECONCILIATION,EXCHANGE2,AKUNA'
]
for (var i = 0; i < input.length; i++) {
  var current = input[i];
  result.push(test.process(current));
}

console.log(result);
