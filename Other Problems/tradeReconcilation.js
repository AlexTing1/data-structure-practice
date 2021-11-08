class tradeReconciliation {
  akunaTrades = {}; //{tradeProduct: {time: quanitity}}
  exchangeTrades = {}; // {exchange: {tradeProduct: {time: quantity}} }

  process(line) {
    const input = line.split(',');
    if (input.length === 4) {
      const name = input[0];
      const product = input[1];
      const quantity = input[2];
      const time = input[3];

      if (name === 'AKUNA') {
        let trade = {};
        trade[time] = quanitity;
        if (akunaTrades[product] === undefined) {
          akunaTrades[product] = trade;
        } else {
          akunaTrades[product][time] = quantity;
        }
      } else {
        if (exchange[name] === undefined) {
          exchange[name] = {}
        } else {
          exchange[name] = product;
        }

        if (exchange[name][product] === undefined) {
          exchange[name][product] = trade;
        } else {
          exchange[name][product][time] = quanitity;
        }
      }

      return quanitity;
    } else {
      const command = input[0];
      const exchange1 = input[1];
      const exchange2 = input[2];
      let count = 0;

      if (exchange1 === 'AKUNA') {
        const akunaKeys = Object.keys(akunaTrades);
        for (var i = 0; i < akunaKeys.length; i++) {
          const tradeProduct = akunaKeys[i]; //object of times and quantity of trades
          const exchange = exchangeTrades[exchange2];
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
      }
      return count;
    }
  }
}