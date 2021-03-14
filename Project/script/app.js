// increment
var qte = 0; var result = 0; 
document.getElementsByClassName("btn-prod")[0].addEventListener("click" , ()=>{
    qte++ ;
    result += 250 ;
    document.getElementsByClassName("qty")[0].innerHTML = qte ;
    document.getElementsByClassName("price")[0].innerHTML = result ;
    document.getElementById("total").innerHTML =+ document.getElementById("total").innerHTML + 250 ;
});
// decrement
document.getElementsByClassName("btn-prod")[1].addEventListener("click" , ()=>{
    document.getElementsByClassName("qty")[0].innerHTML == 0 ?(
    document.getElementsByClassName("qty")[0].innerHTML = document.getElementsByClassName("qty")[0].innerHTML ,
    document.getElementsByClassName("price")[0].innerHTML = document.getElementsByClassName("price")[0].innerHTML 
    )  : (
    qte-- ,
    result -= 250 ,
    document.getElementsByClassName("qty")[0].innerHTML = qte ,
    document.getElementsByClassName("price")[0].innerHTML = result,
    document.getElementById("total").innerHTML =+ document.getElementById("total").innerHTML - 250 );
}); 

// increment2
var qte1 = 0; var result1 = 0;
document.getElementsByClassName("btn-prod")[2].addEventListener("click" , ()=>{
    qte1++ ;
    result1 += 250 ;
    document.getElementsByClassName("qty")[1].innerHTML = qte1 ;
    document.getElementsByClassName("price")[1].innerHTML = result1 ;
    document.getElementById("total").innerHTML =+ document.getElementById("total").innerHTML + 250 ;
});

// decrement2
document.getElementsByClassName("btn-prod")[3].addEventListener("click" , ()=>{
    document.getElementsByClassName("qty")[1].innerHTML == 0 ?(
    document.getElementsByClassName("qty")[1].innerHTML = document.getElementsByClassName("qty")[1].innerHTML ,
    document.getElementsByClassName("price")[1].innerHTML = document.getElementsByClassName("price")[1].innerHTML 
    )  : (
    qte1-- ,
    result1 -= 250 ,
    document.getElementsByClassName("qty")[1].innerHTML = qte1 ,
    document.getElementsByClassName("price")[1].innerHTML = result1 ,
    document.getElementById("total").innerHTML =+ document.getElementById("total").innerHTML - 250 );
}); 

// increment3

var qte2 = 0; var result2 = 0;
document.getElementsByClassName("btn-prod")[4].addEventListener("click" , ()=>{
    qte2++ ;
    result2 += 250 ;
    document.getElementsByClassName("qty")[2].innerHTML = qte2 ;
    document.getElementsByClassName("price")[2].innerHTML = result2 ;
    document.getElementById("total").innerHTML =+ document.getElementById("total").innerHTML + 250 ;
});

// decrement3
document.getElementsByClassName("btn-prod")[5].addEventListener("click" , ()=>{
    document.getElementsByClassName("qty")[2].innerHTML == 0 ?(
    document.getElementsByClassName("qty")[2].innerHTML = document.getElementsByClassName("qty")[2].innerHTML ,
    document.getElementsByClassName("price")[2].innerHTML = document.getElementsByClassName("price")[2].innerHTML 
    )  : (
    qte2-- ,
    result2 -= 250 ,
    document.getElementsByClassName("qty")[2].innerHTML = qte2 ,
    document.getElementsByClassName("price")[2].innerHTML = result2 ,
    document.getElementById("total").innerHTML =+ document.getElementById("total").innerHTML - 250) ;
}); 

  