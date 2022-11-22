// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var payment=document.getElementById("payment")

var wholeWheatBun = 10;
var cost=170;
//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  // renderButtons();
  // renderIngredientsBoard();
  // renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display="block"
    console.log("display now") 
  
    

  } else {
    patty.style.display = "none";
    console.log("hide now")
    //   console.log("minus")
    
  }

}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese=document.getElementById("cheese")
  if(state.Cheese){
    cheese.style.display="block"

  }
  else{
    cheese.style.display="none"
    
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes=document.getElementById("tomato")
  if(state.Tomatoes){
    tomatoes.style.display="block"
    
  }
  else{
    tomatoes.style.display="none"
    
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions=document.getElementById("onion")
  if(state.Onions===true){
    onions.style.display="block"
  }
  else{
    onions.style.display="none"
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce=document.getElementById("lettuce")
  if(state.Lettuce){
    lettuce.style.display="block"
  }
  else{
    lettuce.style.display="none"

  }

}

document.querySelector(".btn-patty").onclick = function () {
  let pstate= document.querySelector("#Pstate")  
  state.Patty = !state.Patty
  console.log("Patty rendering")
  if(state.Patty===true){
    pstate.classList.add("active")
    console.log("color show")
    document.getElementById("Pattyi").style.display="block"
    cost+=80
    payment.innerText=cost
  }
  else{
    pstate.classList.remove("active")
    console.log("color hide")
    document.getElementById("Pattyi").style.display="none"
    cost-=80
    payment.innerText=cost
  }
  
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button

document.querySelector(".btn-cheese").onclick = function() {
  let cstate= document.querySelector("#Cstate")
  state.Cheese = !state.Cheese
  console.log("cheese rendering")
  if(state.Cheese){
    console.log("color cheese")
    cstate.classList.add("active")
    document.getElementById("Cheesei").style.display="block"
    cost+=10
    payment.innerText=cost
  }
  else{
    console.log("hide cheese")
    cstate.classList.remove("active")
    document.getElementById("Cheesei").style.display="none"
    cost-=10
    payment.innerText=cost
  }
  renderAll()

}

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = () => {
  let tstate= document.querySelector("#Tstate")
  state.Tomatoes = !state.Tomatoes
  console.log("Tomatoes rendering")
  if(state.Tomatoes){
    tstate.classList.add("active")
    document.getElementById("Tomatoesi").style.display="inline"
    cost+=20
    payment.innerText=cost
  }
  else{
    tstate.classList.remove("active")
    document.getElementById("Tomatoesi").style.display="none"
    cost-=20
    payment.innerText=cost
  }
  renderAll()
}

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = () => {
  let ostate= document.querySelector("#Ostate")
  state.Onions = !state.Onions
  console.log("Onions rendering")
  if(state.Onions){
    ostate.classList.add("active")
    document.getElementById("Onionsi").style.display="inline"
    cost+=20
    payment.innerText=cost

  }
  else{
    ostate.classList.remove("active")
    document.getElementById("Onionsi").style.display="none"
    cost-=20
    payment.innerText=cost

  }
  renderAll()
}

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = () => {
  let lstate= document.querySelector("#Lstate")
  state.Lettuce = !state.Lettuce
  console.log("Letture rendering")
  if(state.Lettuce){
    lstate.classList.add("active")
    document.getElementById("Lettucei").style.display="inline"
    cost+=20
    payment.innerText=cost

  }
  else{
    lstate.classList.remove("active")
    document.getElementById("Lettucei").style.display="none"
    cost-=20
    payment.innerText=cost

  }
  renderAll()
}

//Challenge 1 - Add/Remove the class active to the buttons based on state
console.log("Done above")


//Challenge 2 - Render only the items selected in the ingredients board based on the state
if(state.Patty){
  renderPatty()
}
if(state.Cheese){
  renderCheese()
}
if(state.Tomatoes){
  renderTomatoes()
}
if(state.Onions){
  renderOnions()
}
if(state.Lettuce){
  renderLettuce()
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
let last=document.getElementById("last")
last.addEventListener("click",final)
function final(){
  last.innerText="Thank You! Visit Again :)"
  console.log("Finally Done ;)")
}