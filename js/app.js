// Here i get the height of the elements

document.addEventListener('DOMContentLoaded', ()=>{

       header_length = document.querySelector("header").offsetHeight;
    
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

let body = document.body,
    html = document.documentElement;
    
let height = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight );


// Loop over all sections, fire the section on window, when scrolling.
document.addEventListener("DOMContentLoaded", ()=>{
    document.addEventListener('scroll', function(e) {

        setTimeout(() => {
            section_length = sections[0].offsetHeight;
            //console.log(header);
            lastKnownScrollPosition = window.scrollY-header_length;
            let index = Math.ceil(lastKnownScrollPosition / section_length)-1;  

            for(l of li_s){
                l.style.backgroundColor = "black";
            }
            for(section of sections){
                section.classList.remove("your-active-class");
                section.style.backgroundColor = "black";
            }
            if(index>=0){
            if(sections[index] != undefined){
            sections[index].className += "your-active-class";
            sections[index].style.backgroundColor = "blue";
            li_s[index].style.backgroundColor = "red";
            }
            }
            
    
    }, 200);

        //console.log(window.scrollY);
        
        //console.log(index);
      });

})

