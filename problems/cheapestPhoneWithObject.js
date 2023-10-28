var phones = [
    {name:"apple",price:100000,color:"Black"},
    {name:"samsung",price:10200,color:"Black"},
    {name:"Xiomi",price:13500,color:"Black"},
    {name:"Nokia",price:16000,color:"Black"},
    {name:"Walton",price:10000,color:"Black"}
];

let cheapest = phones[0];
for(const phone of phones) {
    if (phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);