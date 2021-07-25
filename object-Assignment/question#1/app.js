 var itemsArray =[
    {name:'juice',price:50, quantity:3},
    {name:'cookie',price:30, quantity:9},
    {name:'shirt',price:880, quantity:1},
    {name:'pen',price:100, quantity:2}
];
 var allTotal=0;
for(var key in itemsArray[0]){
    document.write(key+" ");
}
document.write("total")
 for (let i = 0; i < itemsArray.length; i++) {
     console.log(itemsArray[i].name + itemsArray[i].price + itemsArray[i].quantity);
     document.write("<br>")
      for(var key in itemsArray[i]){
              document.write(itemsArray[i][key]+" &nbsp&nbsp&nbsp&nbsp&nbsp");
            }
        itemsArray[i].total=itemsArray[i].price*itemsArray[i].quantity;
        document.write(itemsArray[i].total);
        allTotal +=  itemsArray[i].total;
}
document.write("<br><br>Total of all items "+allTotal)