let div = document.querySelector(".inpuT");
let input = document.querySelector(".input");
div.appendChild(input);
let img = document.querySelector(".img");
div.appendChild(img);

img.addEventListener("click", function () {
  input.classList.toggle("input2");
});
// სარეგისტრაციო ფორმა
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
linkpassword.innerHTML="href https://myaccount.google.com/intro"

//ღილაკის ფუნქციონალი
acauntbtn.addEventListener("click", function () {
  if (input1.value.length > 6 &&input3.value == "@") {
   
    acauntsingin.style.opacity="1"
    acaunticon.style.opacity="1"
    logout.style.opacity="1"
    acaunt.style.opacity="0"
  }
  else{
    wrongpasword.style.opacity="1"
    input1.value=""
    input3.value=""
  }
 
});
logout.addEventListener("click",function(){
    acaunt.style.opacity="1"
    acauntsingin.style.opacity="0"
    acaunticon.style.opacity="0"
    logout.style.opacity="0"
    input1.value=""
    input3.value=""
})
// ტექსტის კონტეინერი
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
//მეორე სექცია

let secondsection=document.querySelector(".secondsection")
// მეორე სექციის პირველი კონტეინერი
let secondsection_div1=document.createElement("div")
secondsection.appendChild(secondsection_div1)
secondsection_div1.classList.add("secondsection_div1")
let textdiv=document.createElement("div")
textdiv.classList.add("textdiv")
secondsection_div1.appendChild(textdiv)
let firstext=document.createElement("p")
let secondtext=document.createElement("p")
textdiv.append(firstext,secondtext)
firstext.classList.add("firstext")
secondtext.classList.add("secondtext")
firstext.innerHTML="Meet our team"
secondtext.innerHTML="Dicta omnes ius ut, ei atomorum voluptatum definitionem per. Zril petentium sit at, vel at quis corrumpit. At facilisi per. Sed wisi persius ut, veri novum eu eos, nam ne facer elaboraret."
//ქარდების პირველი კონტენიერი
let card_div= document.createElement("div")
card_div.classList.add("card_div")
secondsection_div1.appendChild(card_div)
let card =document.querySelector(".card")
card_div.appendChild(card)
let card2=document.querySelector(".card2")
card_div.appendChild(card2)
let card_dvi2=document.createElement("div")
card_dvi2.classList.add("card_div2")
secondsection_div1.appendChild(card_dvi2)
let card3=document.querySelector(".card3")
card_dvi2.appendChild(card3)
let card4=document.querySelector(".card4")
card_dvi2.appendChild(card4)
let cardperson=document.querySelector(".cardperson")
let cardperson2=document.querySelector(".cardperson2")
let cardperson3=document.querySelector(".cardperson3")
let cardperson4=document.querySelector(".cardperson4")

//მეორე სექციის ფოტო
let secondsection_photo=document.querySelector(".secondsection_photo")
secondsection.appendChild(secondsection_photo)
let secondsection_image=document.querySelector(".secondsection_image")
secondsection_photo.appendChild(secondsection_image)


//ქარდები ქლიქ ფუნქციონალები

cardperson.addEventListener("click",function(){
  secondsection_image.style.display="none"
  
  let clickdiv=document.createElement("div")
  clickdiv.classList.add("clickdiv")
  secondsection_photo.appendChild(clickdiv)
  let photo=document.createElement("img")
  photo.classList.add("photo")
  clickdiv.appendChild(photo)
  let clicktext=document.createElement("p")
  clicktext.classList.add("clicktext")
  clickdiv.appendChild(clicktext)
  photo.setAttribute("src", "./images/moica.png")
  clicktext.innerHTML=" Dicta omnes ius ut, ei atomorum voluptatum definitionem  ."
})
cardperson2.addEventListener("click",function(){
  secondsection_image.style.display="none"
  let clickdiv=document.createElement("div")
  clickdiv.classList.add("clickdiv")
  secondsection_photo.appendChild(clickdiv)
  let photo=document.createElement("img")
  photo.classList.add("photo")
  clickdiv.appendChild(photo)
  let clicktext=document.createElement("p")
  clicktext.classList.add("clicktext")
  clickdiv.appendChild(clicktext)
  photo.setAttribute("src", "./images/sebas.png")
  clicktext.innerHTML=" Dicta omnes ius ut, ei atomorum voluptatum definitionem  "
})
cardperson3.addEventListener("click",function(){

  secondsection_image.style.display="none"
  let clickdiv=document.createElement("div")
  clickdiv.classList.add("clickdiv")
  secondsection_photo.appendChild(clickdiv)
  let photo=document.createElement("img")
  photo.classList.add("photo")
  clickdiv.appendChild(photo)
  let clicktext=document.createElement("p")
  clicktext.classList.add("clicktext")
  clickdiv.appendChild(clicktext)
  photo.setAttribute("src", "./images/garh.png")
  clicktext.innerHTML=" Dicta omnes ius ut, ei atomorum voluptatum definitionem "
})
cardperson4.addEventListener("click",function(){
  secondsection_image.style.display="none"
  let clickdiv=document.createElement("div")
  clickdiv.classList.add("clickdiv")
  secondsection_photo.appendChild(clickdiv)
  let photo=document.createElement("img")
  photo.classList.add("photo")
  clickdiv.appendChild(photo)
  let clicktext=document.createElement("p")
  clicktext.classList.add("clicktext")
  clickdiv.appendChild(clicktext)
  photo.setAttribute("src", "./images/Oval.png")
  clicktext.innerHTML=" Dicta omnes ius ut, ei atomorum voluptatum definitionem"
})

//მესამე სექცია
let sectionthre=document.querySelector(".sectonthre")
//მესამე სექციის სათაური
let tilte=document.createElement("div")
tilte.classList.add("tilte")
sectionthre.appendChild(tilte)
let title_h2=document.createElement("h2")
let title_p=document.createElement("p")
let title_p3=document.createElement("p")
title_p3.classList.add("title_p3")
title_h2.classList.add("title_h2")
title_p.classList.add("title_p")
tilte.append(title_h2,title_p,title_p3)
title_h2.innerHTML="Testimonials"
title_p.innerHTML="Quidam officiis similique sea ei, vel tollit indoctum efficiendi  "
title_p3.innerHTML=" at nihil tantas platonem eos. "
//მეასმე სექციის ქარდები
let sectonthre_cards=document.createElement("div")
sectonthre_cards.classList.add("sectonthre_cards")
sectionthre.appendChild(sectonthre_cards)
let data = [
  {
      img: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/988/posts/31561/image/what-are-values-A.jpg",
      txt1: "Quidam officiis similique indoctum platonem singulis ornatus nam maiestatis everti invenire intellegam, legendos consequuntur eu sit.",
      txt2: 'Shirline Dungey '

  },
  {
      img: 'https://www.bankinter.com/file_source/nbol/images/Nav/Banca%20personal/fondos_inversion_pers.jpg',
      txt1: 'Dicat eripuit accumsan facilisi has cetero argumentum, vel at fugit definitionem integre abhorreant epicurei ferri aperiri pri.',
      txt2: 'Tiontay Carroll'

  },
  {
      img: 'https://people.math.ethz.ch/~afigalli/avatar.jpg',
      txt1: 'Quidam officiis similique indoctum efficiendi platonem singulis ornatus nam maiestatis everti invenire intellegam, legendos consequuntur eu sit.',
      txt2: 'Hector Mariano'

  },
  {
      img: 'https://blog.tortugabackpacks.com/wp-content/uploads/2019/10/Austin-team-photos-TORTUGA1_5150-cropped-e1633711844770.jpg',
      txt1: 'Quidam officiis similique indoctum efficiendi platonem singulis ornatus nam maiestatis everti invenire intellegam, legendos consequuntur eu sit.',
      txt2: 'David Low '

  },

  {
      img: 'https://www.littlesphotography.com/wp-content/uploads/2021/03/Wedderburn.jpg',
      txt1: 'Amanda Gipson · Office Manager at Origins Birth and Wellness Collective · Experience · People also viewed · Others named Amanda Gipson · View Amanda',
      txt2: 'Amanda Gipson '

  }
  

]
let index=0
 let cardmap=data.map((i)=>{
  let mapdiv=document.createElement("div")
  mapdiv.classList.add("mapdiv")
  let maptext=document.createElement("p")
  maptext.classList.add("maptext")
  let mapptohodiv=document.createElement("div")
  mapptohodiv.classList.add("mapptohodiv")
  let mapphoto=document.createElement("img")
  mapphoto.classList.add("mapphoto")
  let mapname=document.createElement("p")
  mapname.classList.add("mapname")
  sectonthre_cards.appendChild(mapdiv)
  mapptohodiv.append(mapphoto,mapname)
  mapdiv.append(maptext,mapptohodiv)
  maptext.innerHTML=data[index].txt1
 mapphoto.src=data[index].img
 mapname.innerHTML=data[index].txt2
 index+=1
 //ქარდების სქროლი
 window.addEventListener("scroll",function(){
  if(scrollY<=1350){
   sectonthre_cards.style.marginLeft="2000px"
   sectonthre_cards.style.transition="3s"
 
  }
  else{
    sectonthre_cards.style.marginLeft="0px"
  }
 console.log(this.scrollY)
 })
 })
//მეოთხე სექცია
let sectionfour=document.querySelector(".sectionfour")
let section_4_navigation=document.querySelector(".section_4_navigation")
//ნავიგაცია
let btnall=document.querySelector(".btnall")
let btnblock=document.querySelector(".btnblock")
let btnfint=document.querySelector(".btnfint")
let btnneoba=document.querySelector(".btnneoba")
let btnal=document.querySelector(".btnal")
section_4_navigation.append(btnall,btnblock,btnfint,btnneoba,btnal)
sectionfour.appendChild(section_4_navigation)
//ბოქები
let boxes=document.querySelector(".boxes")
let box1=document.querySelector(".box_1")

let box2=document.querySelector(".box_2")
let box3=document.querySelector(".box_3")
let box4=document.querySelector(".box_4")
boxes.append(box1,box2,box3,box4)
sectionfour.append(boxes)
//ფუნქციონალი
btnblock.addEventListener("click",function(){
box2.style.display="none"
box3.style.display="none"
box4.style.display="none"
box1.style.width="30%"
box1.style.height= "60vh"
box1.style.margin= "0"
box1.style.display="block"


})
btnfint.addEventListener("click",function(){
  box1.style.display="none"
  box3.style.display="none"
  box4.style.display="none"
  box2.style.width="30%"
  box2.style.height= "60vh"
  box2.style.margin= "0"
  box2.style.display="block"
  
  
  })
btnneoba.addEventListener("click",function(){
  box1.style.display="none"
  box2.style.display="none"
  box4.style.display="none"
  box3.style.width="30%"
  box3.style.height= "60vh"
  box3.style.margin= "0"
  box3.style.display="block"
  
  
  })
  btnal.addEventListener("click",function(){
    box1.style.display="none"
    box2.style.display="none"
    box3.style.display="none"
    box4.style.width="30%"
    box4.style.height= "60vh"
    box4.style.margin= "0"
    box4.style.display="block"
    
    
    })
    btnall.addEventListener("click",function(){
      box1.style.display="block"
      box2.style.display="block"
      box3.style.display="block"
      box4.style.display="block"
      box4.style.width="18%"
      box4.style.height= "50vh"
      box4.style.marginTop= "3%"
      box2.style.width="18%"
      box2.style.height= "50vh"
      box2.style.marginTop= "3%"
      box1.style.width="18%"
      box1.style.height= "50vh"
      box3.style.width="18%"
      box3.style.height= "50vh"
     
      
      
      })
 //მეხუთე  სექცია
 let sectionfive=document.querySelector(".sectionfive")
let threcarddiv=document.createElement("div")
sectionfive.appendChild(threcarddiv)
threcarddiv.classList.add("threcarddiv")
let firstcard=document.createElement("div")
firstcard.classList.add("firstcard")
let firstcardimg=document.createElement("img")
let firstcardh2=document.createElement("h2")
let firstcardbtn=document.createElement("button")
firstcardimg.classList.add("firstcardimg")
firstcardbtn.classList.add("firstcardbtn")
threcarddiv.appendChild(firstcard)
let hidendiv1=document.createElement("div")
hidendiv1.classList.add("hidendiv")
let p11 =document.createElement("p")
let p21 =document.createElement("p")
let p31 =document.createElement("p")
let p41 =document.createElement("p")
let p51 =document.createElement("p")
let p61 =document.createElement("p")
p61.classList.add("p6")
hidendiv1.append(p11,p21,p31,p41,p51,p61)
firstcard.append(firstcardimg,firstcardh2,hidendiv1,firstcardbtn)
firstcardimg.setAttribute("src", "./icons/cpu.png")
firstcardh2.innerHTML="Normal plan"
firstcardbtn.innerHTML="More"
firstcardh2.classList.add("firstcardh2")
p11.innerHTML="Lorem deterruisset"
p21.innerHTML="Hinc lorem"
p31.innerHTML="Autem molestiae"
p41.innerHTML="Mei mazim"
p51.innerHTML="Feugait electram"
p61.innerHTML="$24"

let secondcard=document.createElement("div")
secondcard.classList.add("firstcard")
let secondardimg=document.createElement("img")
let secondcardh2=document.createElement("h2")
let secondcardbtn=document.createElement("button")
secondardimg.classList.add("firstcardimg")
secondcardbtn.classList.add("firstcardbtn")
secondcardh2.classList.add("firstcardh2")
threcarddiv.appendChild(secondcard)
let hidendiv=document.createElement("div")
hidendiv.classList.add("hidendiv")
let p1 =document.createElement("p")
let p2 =document.createElement("p")
let p3 =document.createElement("p")
let p4 =document.createElement("p")
let p5 =document.createElement("p")
let p6 =document.createElement("p")
p6.classList.add("p6")
hidendiv.append(p1,p2,p3,p4,p5,p6)
secondcard.append(secondardimg,secondcardh2,hidendiv,secondcardbtn)
secondardimg.setAttribute("src", "./icons/cpu.png")
secondcardh2.innerHTML="Normal plan"
secondcardbtn.innerHTML="More"
p1.innerHTML="Lorem deterruisset"
p2.innerHTML="Hinc lorem"
p3.innerHTML="Autem molestiae"
p4.innerHTML="Mei mazim"
p5.innerHTML="Feugait electram"
p6.innerHTML="$24"


let therdcard=document.createElement("div")
therdcard.classList.add("firstcard")
let therdardimg=document.createElement("img")
let therdcardh2=document.createElement("h2")
let therdcardbtn=document.createElement("button")
therdardimg.classList.add("firstcardimg")
therdcardbtn.classList.add("firstcardbtn")
therdcardh2.classList.add("firstcardh2")
let hidendiv2=document.createElement("div")
hidendiv2.classList.add("hidendiv")
let p12 =document.createElement("p")
let p22 =document.createElement("p")
let p32 =document.createElement("p")
let p42 =document.createElement("p")
let p52 =document.createElement("p")
let p62 =document.createElement("p")
p62.classList.add("p6")
hidendiv2.append(p12,p22,p32,p42,p52,p62)
threcarddiv.appendChild(therdcard)
therdcard.append(therdardimg,therdcardh2,hidendiv2,therdcardbtn)
therdardimg.setAttribute("src", "./icons/cpu.png")
therdcardh2.innerHTML="Normal plan"
therdcardbtn.innerHTML="More"
p12.innerHTML="Lorem deterruisset"
p22.innerHTML="Hinc lorem"
p32.innerHTML="Autem molestiae"
p42.innerHTML="Mei mazim"
p52.innerHTML="Feugait electram"
p62.innerHTML="$24"

let counter=0
firstcardbtn.addEventListener("click",function(){
  
  if(counter==0){
      firstcard.style.height="90%"
      firstcard.style.transition="0.5s"
counter+=1
      hidendiv1.style.display="flex"
    }
    else{
      firstcard.style.transition="0.5s"
      hidendiv1.style.display="none"
      firstcard.style.height="30%"
      counter-=1
    }
    if(counter==1){
      firstcardbtn.innerHTML="less"
    }
    else{
      firstcardbtn.innerHTML="More"
    }
 
   
  
  

})
let counter2=0
secondcardbtn.addEventListener("click",function(){
  if(counter2==0){
    secondcard.style.height="90%"
    secondcard.style.transition="0.5s"
counter2+=1
    hidendiv.style.display="flex"
  }
  else{
    secondcard.style.transition="0.5s"
    hidendiv.style.display="none"
    secondcard.style.height="30%"
    counter2-=1
  }
  if(counter2==1){
    secondcardbtn.innerHTML="less"
  }
  else{
    secondcardbtn.innerHTML="More"
  }
  
 
})
let counter3=0
therdcardbtn.addEventListener("click",function(){
  if(counter3==0){
    therdcard.style.height="90%"
    therdcard.style.transition="0.5s"
counter3+=1
    hidendiv2.style.display="flex"
  }
  else{
    therdcard.style.transition="0.5s"
    hidendiv2.style.display="none"
    therdcard.style.height="30%"
    counter3-=1
  }
  if(counter3==1){
    therdcardbtn.innerHTML="less"
  }
  else{
    therdcardbtn.innerHTML="More"
  }
  
})