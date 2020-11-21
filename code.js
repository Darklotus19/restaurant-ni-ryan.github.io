var pizza = 0;
var coffee = 0;
var burger = 0;
var pasta = 0;

var f1 = 0;
var f2 = 0;
var f3 = 0;
var f4 = 0;






function show() {
    document.getElementById("food");

}

function show1(){
    document.getElementById("food").src= "https://cropper.watch.aetnd.com/cdn.watch.aetnd.com/sites/2/2018/05/hungry-history-a-slice-of-history-pizza-through-the-ages-iStock_000018675576Large.jpg";

 
    
    pizza = pizza + 120;
    f1 =  f1 + 1;

document.getElementById("f1").innerHTML =  "Pizza: " + pizza  + "(" +  f1 + ")"  ;  

}

function show2(){
    document.getElementById("food").src= "https://cdn.shopify.com/s/files/1/1381/2647/articles/recipe_-_dagona_coffee_800x.jpg?v=1586541908";
 
    
    coffee = coffee + 45;
    f2 = f2 +1;

document.getElementById("f2").innerHTML =  "Coffee: " + coffee  + "(" +  f2 + ")"  ;  
}

function show3(){
    document.getElementById("food").src= "https://i.guim.co.uk/img/media/42bec9e038a74f948c708096dac0a5a2ed4d3644/0_330_3500_2100/master/3500.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=135036d53fe10881a0f403331abeb6f0";

    
    burger = burger + 55;
    f3 = f3 +1;

document.getElementById("f3").innerHTML =  "Burger: " + burger  + "(" +  f3 + ")"  ;  
}

function show4(){
    document.getElementById("food").src= "https://www.recipetineats.com/wp-content/uploads/2014/06/Pasta1.jpg";

    
    pasta = pasta + 65;
    f4 = f4 + 1;

document.getElementById("f4").innerHTML =  "Pasta: " + pasta  + "(" +  f4 + ")"  ;  
}

function cancel(){
    
    alert ("Are you sure you want to cancel your order?");
    
    document.getElementById("f1").innerHTML = "Pizza "+ " "  ;  
    document.getElementById("f2").innerHTML = "Cofee "+  " "  ;  
    document.getElementById("f3").innerHTML = "Burger "+  " "  ;  
    document.getElementById("f4").innerHTML = "Pasta " + " "  ;  
    document.getElementById("total").innerHTML = "Total"  + " " ;  
    
    document.getElementById("food").src= "https://medias1.prestastore.com/749961-pbig/era-customer-order-cancel-from-frontend.jpg";

}

function order(){
    

  var total = pizza + coffee + burger + pasta;
  var overall = f1 + f2 + f3 + f4;
document.getElementById("total").innerHTML= "Total: " + total + " (" + overall + ")";

}



 
