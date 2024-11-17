//                    Assignment
// Consider the following product object
let product1 = {
    id: 101,
    title: "Sony LED 40 inch 101",
    quantity: 5,
    price: 50000,
    status: true
};

// 1- Copy all the properties of product1 into product2 and change the price & status. 
let product2 = {
    ...product1
}
product2.price = 55000;
product2.status = false;
console.log(product2)

// 2- Destucture title & price of product1 and the remaining properties in others object.

let{title,price} = product1;
console.log(price)


// 3- Add some two properties in product1 dynamically.
let product3 =  {...product1,date : new Date("13 aug,2024"),
    color : "gray",
}
console.log(product3)


// 4- increase all number type properties of product1 by 10% using map.
product1.price = product1.price + (product1.price * .10);
product1.id = product1.id + (product1.id * .10);
product1.quantity =  product1.quantity + (product1.quantity * .10 )
console.log(product1)

