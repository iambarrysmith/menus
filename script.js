var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");
var title =document.createElement("h1");
var clicker = document.body.querySelector(".clicker");
var num = document.body.querySelector(".num");
var number = 0;
//var counter = document.createElement("button");
var adder = add();



// function add() {
//   number = number + 1;
//   display.innerHTML = number;
// }

// function createCounter(){
//   var counter = document.createElement("button");
//   counter.addEventListener("click",function(){
//     add();
//   })
// }

var pages = [
  {
    name:"Home",
    content:"Home"
  },
  {
    name:"About",
    content:"About"
  },
  {
    name:"Interact",
    content:""
  }
];



for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
}

  function add() {
  number = number + 1;
  }

function createPage(pg){
  var button =document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
 });
  button.innerHTML=pg.name;
  nav.appendChild(button);
}

function contentWrite(wd,pg){
  display.innerHTML="";
  
  if (pg == "Home"){
    homePage();
  }
  if(pg == "About"){
    aboutPage();
  }
  if(pg == "Interact"){
    //document.body.querySelector(".num").style.visibilty="visible";
    interactPage();
    //createCounter();
  }
  // if (pg!= "Interact"){
  //   document.body.querySelector(".num").style.visibilty="hidden";
  // }
}

function interactPage(){
  //createCounter();
  var counter = document.createElement("button");
  var number = 0;
  title.innerHTML="Interact";
  display.appendChild(title);
  counter.innerHTML="Counter";
  function add() {
  number = number + 1;
  num.innerHTML="Counter: "+number;
  }
  counter.addEventListener("click", function () {add();});            
  display.appendChild(counter);
 // num.innnerHTML="Counter: "+number;
}


                           
//   function createCounter(){
//   var counter = document.createElement("button");
//   counter.addEventListener("click",function(){
//     add();
//     display.appendChild(counter);
//     display.innerHTML=number;
//   })
// }
  //createCounter();
 //display.appendChild(counter);

 

function aboutPage(){
  title.innerHTML="About";
  display.appendChild(title);
  var name = document.createElement("h3");
  name.innerHTML="Barry";
  display.appendChild(name);
  //document.body.querySelector(".num").style.visibility="hidden";
}

function homePage(){
  title.innerHTML="Home";
  display.appendChild(title);
  //document.body.querySelector(".num").style.visibility="hidden";
}


contentWrite(pages[0].content, "Home");

// var count = 0;
// document.body.querySelector(".counter").innerHTML=count;

// document.body.querySelector(".butt").addEventListener("click",function(){
//   count=count+1;
//   document.body.querySelector(".counter").innerHTML=count;
// });