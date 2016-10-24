var prodcuts = [
{ 
name : "test", 
price : 12.9, 
},
{ 
name : "test2", 
price : 30, 
}]; 
function ProductLineItem(id) { 
return prodcuts[id]; 
} 
var basket = (function(){ 
var mas=[]; 
return { 
addProduct : function(productID){ 
if(productID<0||productID>prodcuts.length-1) 
{ 
throw IdError('Woops, your product id is wrong'); 
return; 
} 
mas.push(new ProductLineItem(productID)) 
}, 
removeProduct : function(productID){ 

for(var i in mas) 
{ 
if(mas[i]==prodcuts[productID])
{
delete(mas[i]);
} 
} 
}, 
updateProductCount: function(productID, count) { 
if(productID<0||productID>prodcuts.length-1) 
{ 
throw IdError('Woops, your product id is wrong'); 
return; 
} 
this.removeProduct(productID); 
for(var i=0;i<=count;++i) 
{ 
this.addProduct(productID); 
} 
}, 
getTotalPrice : function(){ 
var sum=0; 
for(var i in mas) 
{ 
sum+=mas[i].price; 
} 
return sum; 
}, 
getProductInfo:function(){return mas} 
} 
})(); 
try{ 
basket.addProduct(0); 
basket.addProduct(1); 
basket.addProduct(1); 
basket.addProduct(0); 
basket.addProduct(1); 
//basket.addProduct(21); 
console.table(basket.getProductInfo()); 
//basket.updateProductCount(0,3); 
//console.table(basket.getProductInfo()); 
console.log("Total price: "+basket.getTotalPrice()); 
}catch(e){ 
console.log(e.message); 
};
