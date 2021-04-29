const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('header');
const body = document.querySelector('body');
const overlay= document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade')
btnHamburger.addEventListener('click', function(){//Close hamburger menu
  console.log("hello")
  if(header.classList.contains('open')){
    header.classList.remove('open');
    fadeElements.forEach(element =>{
      element.classList.remove('fade-in')
      element.classList.add('fade-out')
    })
    body.classList.remove('no-scroll');
  }
  else{//Open hamburger menu
    header.classList.add('open');
    fadeElements.forEach(element =>{
      element.classList.remove('fade-out')
      element.classList.add('fade-in')
    })
    body.classList.add('no-scroll');
  }
})
