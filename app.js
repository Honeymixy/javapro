 "use strict"
// let thirdbutton = document.querySelector('.inc')
// let body = document.querySelector('body')
// // console.log(thirdbutton);
// console.log(body);
//  function bgcolour(){
//    let color = body.classList.contains('col')
//    if(color){
//       body.classList.remove('col')
//    }else{
//       body.classList.add('col')
//    }
// }
//  thirdbutton.addEventListener('click',bgcolour)

//  let firstbutton = document.querySelector('.dec');
//  console.log(firstbutton);
//  let newH = document.querySelector('h2');
//  console.log(newH);
//  function newButton() {
//     let newHH = newH.innerText ='Ayanfe'
//  }
//  firstbutton.addEventListener('click',newButton)

let dec = document.querySelector('.dec')
let h2 = document.querySelector('h2')
let inc = document.querySelector('.inc')
let res = document.querySelector('.res')
let body = document.body.style
const heading = document.querySelector('h2')


// function newName(){
//    if(h2.innerText ==0){
//        h2.innerText = 'ibee'
//    }else{
//        h2.innerText = 0
//    }
// }
// dec.addEventListener('click',newName)

// let numm = 0
// function decNum(){
//    numm = numm - 1
//    h2.innerText = numm
//    if (numm < 0 ) {
//       body.backgroundColor='red'
//    }
// }
// function incNum(){
//    numm = numm + 1
//    h2.innerText = numm
//    if (numm > 0 ) {
//       body.backgroundColor='green'
//    }
// }

// dec.addEventListener('click', decNum)
// inc.addEventListener('click',incNum)

//Increase
function getIncrease(){
   heading.innerText ++
   if (heading.innerText > 0) {
      body.backgroundColor = 'green'
   }
}
inc.addEventListener('click',getIncrease)
// Reset
function getReset(){
   heading.innerText = 0
   if (heading.innerText == 0) {
      body.backgroundColor ='yellow'
      
   }
}
res.addEventListener('click',getReset)
// reset
function getDecrease(){
   heading.innerText --
   if (heading.innerText < 0) {
      body.backgroundColor ="red"
      }
}
dec.addEventListener('click',getDecrease)