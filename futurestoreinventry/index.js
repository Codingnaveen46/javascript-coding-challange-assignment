const items = {
    item1: 10, // USD
    item2: 20, // USD
    item3: 30 // USD
  };
  
  const exchangeRate = 80; // INR
  
  const pricesInRupees = Object.entries(items).map(([item, price]) => {
    return [item, price * exchangeRate];
  });
  
  const itemsInRupees = Object.fromEntries(pricesInRupees);
  
  console.log(itemsInRupees);
  