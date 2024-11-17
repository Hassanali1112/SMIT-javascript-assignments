//                    Assignment
// We sppose products of array is as 
let products = [
  {
    id: 101,
    title: "Sony LED 40 inch 101",
    quantity: 5,
    price: 35000,
    status: true,
    colors: ["red", "black", "green"]
  },
  {
    id: 102,
    title: "Sony LED 43 inch 102",
    quantity: 3,
    price: 40000,
    status: false,
    colors: ["red"]
  },
  {
    id: 103,
    title: "Sony LED 51 inch 103",
    quantity: 2,
    price: 45000,
    status: true,
    colors: ["red", "black"]
  },
  {
    id: 104,
    title: "Sony LED 55 inch 101",
    quantity: 5,
    price: 50003,
    status: true,
    colors: ["red", "black", "green"]
  },
  {
    id: 105,
    title: "Sony LED 27 inch 102",
    quantity: 3,
    price: 50000,
    status: false,
    colors: ["red"]
  },
  {
    id: 106,
    title: "Sony LED 40 inch 103",
    quantity: 2,
    price: 35001,
    status: true,
    colors: ["red", "black"]
  }
]

// 1- Add 16% tax on each product price and then offer 10% discount on price.
let pricesWithTax = products.map(item => item.price + (item.price * .16))
let discountedPrises = pricesWithTax.map(price => price - (price * .10))
console.log(pricesWithTax)
console.log(discountedPrises)



// 2- Show all the LED whose price is in the range of 30K to 40K.
let priceRange = products.filter(item => { if(item.price >= 30000 && item.price <= 40000){
  return item;
}
})
// console.log(priceRange)
// 3- Find the sum of all products whose price is odd number using reduce function. 
let itemWithOddPrice = products.filter(item => ((item.price % 2 ) === 0)).map(item => item.price  ).reduce((acc,currval)=> acc + currval,0)
console.log(itemWithOddPrice)
