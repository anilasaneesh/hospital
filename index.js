let slide=document.querySelectorAll("patient Review");
let card=document.querySelectorAll(".card");
let count=0;
slide.forEach(function(slides,index){
slides.style.left='${index * 100}%';
});
function myfun(){
    slide.forEach(function(curval){
 curval.style.transform='translate(x(-${count *100}%)'
    })
}
setInterval(function(){
count++;
 if (count==slide.length){
    count=0;
 }
 myfun();
 },2000);

card.forEach(function(cards){
    cards.addEventListener("click",function(){
    console.log(cards.firstElementchild.src);
    document.querySelector(".content").style.display="block"
    document.querySelector(".contentDetail").innerHTML=`
    <img src=${cards.firstElementChild.src}>
    <div>
    <h1>DR Alexa</h1>
    <p>
      Ortho surgeon.Bachelor of Medicine,Bachelor of Surgery MBBS/MD  
    </p>
</div>`
closeBtn.addEventListener("click", function(){
document.querySelector(".content").style.display="none"
})
})
})


connectBtn.addEventListener("click",function(){
    let email=document.getElementById("email");
    let pass=document.getElementById("pass");
    if(email.value==""&&pass.value==""){
    alert("please enter Detail")
    }else{
        alert("you Logged In")
        email.value="";
        pass.value="";
    }
})