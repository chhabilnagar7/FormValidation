const submitbtn = document.getElementById('submitbtn');
const nameerror = document.getElementById('name-error')
const emailerror = document.getElementById('email-error');
const passworderror = document.getElementById('pass-error')

submitbtn.addEventListener('click', (a)=>{
    a.preventDefault();

    if(validateName()){
        alert("Form Submitted Successfully!")
    }
});

function validateName(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(name.length == 0){
        nameerror.innerHTML = "Name is required!";
        return false;
    }
    if(email.length == 0){
        emailerror.innerHTML = "Email is required!";
        return false;
        
    }
    if(password.length == 0){
        passworderror.innerHTML = "Password is required!";
        return false;
    }

    return true;
}