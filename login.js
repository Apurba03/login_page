// import {Signup, arr} from "./signup.js";
// var [Email,Username,password]=Signup();

const UserId=document.getElementById("User");
const passwordId=document.getElementById("pass");
const SubmitBtn=document.getElementById("sub");

SubmitBtn.addEventListener("mouseover",(button)=>{
    let user=UserId.value;
    let pass=passwordId.value;
    let validate=/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)?/.test(user) && /[a-zA-Z0-9]{8}/.test(pass);
    if(validate)
    {
        button.target.classList.toggle("stop");
        SubmitBtn.style.background="#45f3ff";
        
    }
    else{
        button.target.classList.toggle("move");
        SubmitBtn.style.background="red";
        console.log(validate);               
    }
})