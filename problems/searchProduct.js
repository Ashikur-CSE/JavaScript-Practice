var phones = [
    {name:"apple phone",price:100000,color:"Black"},
    {name:"samsung phone",price:10200,color:"Black"},
    {name:"Xiomi tv",price:13500,color:"Black"},
    {name:"Nokia watch",price:16000,color:"Black"},
    {name:"Walton camera",price:10000,color:"Black"}
];

function search(products, search){
    let matches = [];
    for(const product of products){
        if (product.name.indexOf(search)!=-1){
            matches.push(product);

        }
    }
    return matches;
}
var searchItem = "PHONE";
var searchItem = searchItem.toLocaleLowerCase();
var res = search(phones, searchItem)
console.log("Result of ",searchItem," is: ",res);