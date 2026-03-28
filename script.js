// Typing animation
const text = ["MERN Stack Developer", "JavaScript Developer", "Frontend Developer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

const typing = document.querySelector(".typing");

function type(){
currentText = text[i];

if(!isDeleting){
typing.textContent = currentText.substring(0, j++);
}else{
typing.textContent = currentText.substring(0, j--);
}

if(j === currentText.length){
isDeleting = true;
setTimeout(type,1000);
return;
}

if(j === 0){
isDeleting = false;
i = (i+1) % text.length;
}

setTimeout(type,100);
}

type();

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
document.body.classList.toggle("light");

// icon change
if(document.body.classList.contains("light")){
    toggleBtn.innerText = "☀️";
}else{
    toggleBtn.innerText = "🌙";
}
});