"use strict"

const recents =  document.getElementById('recents');
const right_side_container = document.getElementById('right-side-container');
let links = document.getElementsByClassName('link');

for (let i = 0; i < links.length; i++){
    links[i].addEventListener('click', (e)=>{
       const class_name = e.target.class_name.split(" ")[0];
    //    right_side_container.innerHTML = recents;
    //    right_side_container.style.background = "red";
    });
}
