const signUp = document.getElementById("signup");
const signIn = document.getElementById("signin");
const container = document.getElementById("container");

signUp.addEventListener('click', ()=>{
    container.classList.add("right-panel-active");
})

signIn.addEventListener('click', ()=>{
    container.classList.remove("right-panel-active");
})