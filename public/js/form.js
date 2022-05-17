// redirect to home page if user logged in
window.onload = () => {
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            location.replace('/');
        }
    }
}

const loader = document.querySelector('.loader');

// select inputs 
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#terms-and-cond') || null;
const notification = document.querySelector('#notification') || null;

submitBtn.addEventListener('click', () => {
    if(name != null){ // sign up page
        if(name.value.length < 3){
            alert('name must be 3 letters long');
        } else if(!email.value.length){
            alert('enter your email');
        } else if(password.value.length < 8){
            alert('password should be 8 letters long');
        } else if(!number.value.length){
            alert('enter your phone number');
        } else if(!Number(number.value) || number.value.length < 10){
            alert('invalid number, please enter valid one');
        } else if(!tac.checked){
            alert('you must agree to our terms and conditions');
        } else{
            // submit form
            alert("User Registered Successfully!!!");
            addEventListener();
            location.replace("connect.php")
        }
    } else{
        // login page
        if(!email.value.length || !password.value.length){
            alert('fill all the inputs');
        } else{
            loader.style.display = 'block';
            sendData('/login', {
                email: email.value,
                password: password.value,
            })
        }
    }
})
function addEventListener()
{
    var m = "https://docs.google.com/forms/d/e/1FAIpQLSf5NXi7V4HuRjKD2Ju-h4Sc_6T9naQ5bNLSXc14r4GITroMmQ/formResponse?usp=pp_url";
    var a = "&entry.9245491="+document.getElementById("name").value;
    var b = "&entry.33495379="+document.getElementById("email").value;
    var c = "&entry.1884210419="+document.getElementById("password").value;
    var d = "&entry.1241394621="+document.getElementById("number").value;
    
    var url = m + a + b + c + d;
    open(url);
    focus();
}