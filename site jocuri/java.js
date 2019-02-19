
window.onload = function(){



// keyboard

  window.onkeyup = function(e) {
    if (e.which == 82) {
      alert("CONTRAGULATIONS! YOU FOUND A SECRET");
    }
  };





// hider

var acc = document.getElementsByClassName("hider");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



// sticky

window.onscroll = function() {stick()};

var header = document.getElementById("stickynavigation");
var sticky = header.offsetTop;

function stick() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}




// reload 

window.onbeforeunload = function reset() {
  window.scrollTo(0, 0);
}





function time()
{
  document.getElementsByClassName("header")[0].style.backgroundImage="url(poze/GAMECORE2.jpg)";

}

setInterval(time,5000);

function time2(){

  document.getElementsByClassName("header")[0].style.backgroundImage="url(poze/GAMECORE.jpg)";
}
setInterval(time2,10000);



};



// slides

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




function gotohome() {
  location.replace("Site.html")
}

// Scroll to top when pressed
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function submitForm() {


  var OK = 1;
  var name = document.getElementsByClassName("name")[0].value;
  
  
  if (name == "") {
  alert("ERROR!!!!!!!!!! NO NAME INTRODUCED!");
  return;
  OK = 0;
  }
  
  for (i = 0; i < name.length; i++)
  if (!isNaN(name[i])) {
    alert("ERROR! YOU CAN'T HAVE NUMBERS IN A NAME!");
    return;
    OK = 0;
  }
  
  
  var email = document.getElementsByClassName("email")[0].value;
  
  
  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
  alert("ERROR! E-MAIL MUST CONTAIN @ AND .  ");
  return;
  OK = 0;
  }
  
  if (OK == 1) {
  alert("SUCCESS! YOU WILL RECEIVE FUTURE NOTIFICATIONS");
  }
  
  }





















function add_h3() {
  // Creaza noul element H3 si ii adauga o clasa si continut
  var att = document.createAttribute("class");
  att.value = "flex-container-item6";
 
  var elm = document.createElement('att');
  elm.setAttributeNode(att);
 elm.className = 'o clasa';
  
  
     elm.innerHTML ='<div class="upcoming-game">'
 +' <img src="poze/metro.jpg" style="width:100%;">'
  +'    </div>'
     +'<div class="upcoming-game">'
     +' <img src="poze/cyber.jpg" style="width:100%;">'
      +'    </div>'
     +'<div class="upcoming-game" >'
     +' <img src="poze/dying.jpg" style="width:100%;">'
      +'    </div>'

    // Creaza obiectul cu elementul de reper (Adaugati-i si valoarea null pentru a vedea diferenta)
    var reper = document.getElementById('rpr');

    // Adauga elementul nou inaintea celui de reper (Parinte este body)
    document.getElementsByClassName('upcominggames')[0].insertBefore(elm, reper);}

    document.getElementById("buton").addEventListener('click', add_h3);