const cart = [
    {name: "Mobile", price: 12500,quantity: 2},
    {name: "Watch", price:8000,quantity: 3},
    {name: "Laptop", price:60000,quantity: 1},
    {name: "Headphone", price:7500,quantity: 2},
];
function cartTotal(cart){
    let subTotal = 0;
    for (const product of cart ){
        total = product.price * product.quantity;
        subTotal = subTotal + total
    }
    return subTotal;
}
var totalPrice = cartTotal(cart);
console.log(totalPrice);