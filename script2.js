class Products{
constructor(priceInput,nameProductInput,dateInput){
this.priceInput = priceInput;
this.nameProductInput = nameProductInput;
this.dateInput = dateInput;
}
}


class Store extends Products {
constructor(storeName,priceInput,nameProductInput,dateInput){
    this.storeName = storeName;
    super(priceInput,nameProductInput,dateInput);
}
addProduct (){
new Products (this.priceInput,this.nameProductInput,this.dateInput);

}
updatedProduct(){
Products = new products 
}
memoProduct(){
localStorage.setItem('products',JSON.stringify({Products}));
let products = JSON.parse(localStorage.getItem("products"));
}


}
let store = new Store('ElkabDiamants',500,'Emerald',new Date());