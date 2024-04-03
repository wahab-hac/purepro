function menu_btn() {
    let menubardiv = document.getElementsByClassName('menu-bar-div');

    let menubar = document.getElementsByClassName('menu-bar');
    let meunbtnline1 = document.getElementsByClassName('menu-btn-line1');
    let meunbtnline2 = document.getElementsByClassName('menu-btn-line2');
    let meunbtnline3 = document.getElementsByClassName('menu-btn-line3');

    if (menubar[0].classList.length == 5) {

        menubar[0].classList.add('hidden');

        meunbtnline1[0].classList.remove('rotate-45', 'translate-y-2');

        meunbtnline2[0].classList.remove('opacity-0');

        meunbtnline3[0].classList.remove('-rotate-45', '-translate-y-1');



    }
    else if (menubar[0].classList.length == 6) {

        menubar[0].classList.remove('hidden');

        meunbtnline1[0].classList.add('rotate-45', 'translate-y-2');

        meunbtnline2[0].classList.add('opacity-0');

        meunbtnline3[0].classList.add('-rotate-45', '-translate-y-1');


    }
}
function catain1()
{
    console.log("abcd");
    let catag=document.getElementsByClassName("cata1");
    if(catag[0].classList.length==11)
    {
        catag[0].classList.add('visible');
        catag[0].classList.remove('invisible');
    }
    
    
    
}
function cataout1()
{
    console.log("abcd");
    let catag=document.getElementsByClassName("cata1");
    if(catag[0].classList.length==11)
    {
        catag[0].classList.remove('visible');
    catag[0].classList.add('invisible');
    }
   
    
    
}


window.addEventListener('load', () => {

    var data = window.location.search;
    var params = new URLSearchParams(data)

    var f_value = params.get("Product")
    document.getElementById('msg').value = f_value;


})
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}






