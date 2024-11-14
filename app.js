let btn1 = document.querySelector(".tosh")
let btn2 = document.querySelector(".qaychi")
let btn3 = document.querySelector(".qogoz")
let natija = document.querySelector(".natija")
let rendum = {
  btn1:0,
  btn2:1,
  btn3:2
}
let user =Object.values(rendum)
btn1.addEventListener("click",()=>{
    let rendumnum=Math.floor(Math.random()*user.length)
    if (rendumnum===0) {
        natija.textContent="durang 😥";
    }
    else if(rendumnum===1){
        natija.textContent="siz yutingiz 😊";
    }
    else{
        natija.textContent="siz yutqazdingiz 😒";
    }

    
})


btn2.addEventListener("click",()=>{
    let rendumnum=Math.floor(Math.random()*user.length)
    if (rendumnum===1) {
        natija.textContent="durang 😥";
    }
    else if(rendumnum===2){
        natija.textContent="siz yutingiz 😊";
        
    }
    else{
        natija.textContent="siz yutqazdingiz 😒";
    }
    
})




btn3.addEventListener("click",()=>{
    let rendumnum=Math.floor(Math.random()*user.length)
  

if (rendumnum===2) {
    natija.textContent="durang 😥";
}
else if(rendumnum===3){
    natija.textContent="siz yutingiz 😊";
}
else{
    natija.textContent="siz yutqazdingiz 😒";
}
    
});







