let div = document.querySelector(".inpuT");
let input = document.querySelector(".input");
div.appendChild(input);
let img = document.querySelector(".img");
div.appendChild(img);

img.addEventListener("click", function () {
  input.classList.toggle("input2");
});

let firssection = document.querySelector(".firssection");
let acaunt = document.createElement("div");
firssection.appendChild(acaunt);
acaunt.classList.add("acaunt");
let acaunth2 = document.createElement("h2");
let inputname = document.createElement("p");
let input1 = document.createElement("input");
let inputemail = document.createElement("p");
let input3 = document.createElement("input");
let acauntbtn = document.createElement("button");
let foregtpasword = document.createElement("p");
acaunt.append(
  acaunth2,
  inputname,
  input1,
  inputemail,
  input3,
  acauntbtn,
  foregtpasword
);
acaunth2.classList.add("acaunth2");
acaunth2.innerHTML = "sign in here!";
inputname.classList.add("inputname");
inputname.innerHTML = "First name";
input1.classList.add("input1");
inputemail.innerHTML = "Last Nmae";
inputemail.classList.add("inputemail");
input3.classList.add("input3");
acauntbtn.classList.add("acauntbtn");
acauntbtn.innerHTML = "Next";
foregtpasword.innerHTML = "Forget Pasword?";
foregtpasword.classList.add("fgps");
let acaunticon = document.querySelector(".acaunticon");
let acauntsingin = document.querySelector(".acauntsingin");
let logout = document.querySelector(".logout")

let wrongpasword=document.createElement("p")
acaunt.appendChild(wrongpasword)
wrongpasword.classList.add("wrongpasword")
wrongpasword.innerText="Wrong Password"
let linkpassword =document.createElement("p")
acaunt.appendChild(linkpassword)
linkpassword.classList.add("linkpassword")
linkpassword.innerHTML="https://myaccount.google.com/intro"
acauntbtn.addEventListener("click", function () {
  if (input1.value.length > 6 &&input3.value == "@") {
   
    acauntsingin.style.opacity="1"
    acaunticon.style.opacity="1"
    logout.style.opacity="1"
    acaunt.style.opacity="0"
  }
  else{
    wrongpasword.style.opacity="1"
  }
});
logout.addEventListener("click",function(){
    acaunt.style.opacity="1"
    acauntsingin.style.opacity="0"
    acaunticon.style.opacity="0"
    logout.style.opacity="0"
})
let firstsection_div2=document.createElement("div")
firssection.appendChild(firstsection_div2)
firstsection_div2.classList.add("firstsection_div2")
let div2_h2 = document.createElement("h2")
let div2_p=document.createElement("p")
firstsection_div2.appendChild(div2_h2)
firstsection_div2.appendChild(div2_p)
div2_p.classList.add("div2_p")
div2_h2.classList.add("div2_h2")
div2_h2.innerHTML="Are you a new member?"
div2_p.innerHTML="Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei, at nihil tantas platonem eos. "

foregtpasword.addEventListener("click",function(){
linkpassword.style.opacity="1"
})