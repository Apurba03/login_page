const EmailId=document.getElementById("Email");
const UserNameId=document.getElementById("Username");
const PasswordId=document.getElementById("password");
const SubmitBtn=document.getElementById("submit");

SubmitBtn.addEventListener("click",Signup);
var Email="";
var Username="";
var password="";
export function Signup(){
    Email=EmailId.value;
    Username=UserNameId.value;
    password=PasswordId.value;
    let arr=[Email,Username,password];
    return arr;
}
// console.log(Email1);


