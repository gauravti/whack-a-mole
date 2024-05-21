var count=0
let gr=document.querySelectorAll(".mole")
gr.forEach(element=>{
    element.style.opacity="0"
})

var flag=0
setInterval(function() {
    let a=Math.random()

    a=Math.floor(a/(1/6))+1
    // console.log(a)
    var b="#mole"+a.toString()

    const d=document.querySelector(b)
    // console.log(d)
    d.style.opacity="1"
    d.style.cursor="pointer"
    setTimeout(function(){
        document.querySelector(b).style.opacity="0"
        document.querySelector(b).style.cursor="context-menu"
        flag=0
    }, 1500);
}, 2000);

setInterval(() => {
    document.querySelector("#rs").innerHTML=count
}, 100);

gr.forEach(element=> {
element.addEventListener('click', function(){
    // this.style.backgroundColor="green"
    // console.log(this.style.backgroundColor);
    if (this.style.opacity == "1" && flag==0){
        count+=1;
        flag=1;
    };
});
});

// gr.addEventListener('click', function(){
//     console.log(12);
//     // console.log(1,this.style.backgroundColor);
//     // if (this.style.backgroundColor == "white"){
//     //     count+=1;
//     //     console.log(count,"done")
//     // };
// });



