// Here i include jquery to get the height of the elements

var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "http://code.jquery.com/jquery-2.2.1.min.js";
document.addEventListener('DOMContentLoaded', ()=>{


    script.onreadystatechange = handler;
    script.onload = handler;

    // Fire the loading
    head.appendChild(script);

    function handler(){
       console.log('jquery added :)');
       section_length = $('.your-active-class').height();
       header_length = $('.main__hero').height();
    }

    
});


// Global Variables
let sections = document.querySelectorAll("section");
let navbar = document.querySelector("nav");
let section_counter = 1;
let ul = document.querySelector("#navbar__list");
ul.style.margin="0px";
ul.style.padding="0px";
ul.style.overflow="hidden";
ul.style.backgroundColor="#333";


// Create the navbar, and go to the corresoponding section when clicking on it on the navbar
for(let section of sections){
    let li = document.createElement("li");
    console.log(li);
    ul.appendChild(li);
    li.style.float = "left";
    let a = document.createElement("a");
    li.appendChild(a);
    a.innerText = "section" + section_counter;
    section_counter+=1;
    a.addEventListener("click", () => {
        section.scrollIntoView({behavior: "smooth"});
    })

}

let li_s = document.querySelectorAll("li"); 


// Get the height of the page

var body = document.body,
    html = document.documentElement;
    
var height = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight );


// Loop over all sections, fire the section on window, when scrolling.

document.addEventListener('scroll', function(e) {
    console.log(document.querySelector('.main__hero').style.height);

    lastKnownScrollPosition = window.scrollY-header_length;
    //console.log(window.scrollY);
    let index = Math.ceil(lastKnownScrollPosition / section_length)-1
    for(l of li_s){
        l.style.backgroundColor = "black";
    }
    for(section of sections){
        section.classList.remove("your-active-class");
    }
    if(index>=0){
    sections[index].className += "your-active-class";
    li_s[index].style.backgroundColor = "red";
    //console.log(index);
    }
  });
