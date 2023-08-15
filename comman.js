var menu = document.querySelector('.hamburger')
var menubar = document.querySelector('.navcont')
var cancel = document.querySelector('.cancel')
menu.addEventListener('click',openmenu )
menubar.addEventListener('click',openmenu )
var opened = false
function openmenu(){
  if(!opened){
    menubar.style.top = "0px"
    opened = true
  }else if(opened){
    menubar.style.top = "-400px"
    opened = false

  }

}