const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};

loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};

signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

// Select the submit buttons
let loginSubmitBtn = document.querySelector('form.login .btn input[type="submit"]');
let signupSubmitBtn = document.querySelector('form.signup .btn input[type="submit"]');

// Add event listeners to the submit buttons
loginSubmitBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    let mail = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    if (mail === localStorage.getItem('mail') && pass === localStorage.getItem('pass')) {
        localStorage.setItem('tr', 'true'); 
        window.location.href = 'quiz.html';
        mail.value = ''
        pass.value = ''
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email or Password is wrong",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
         document.getElementById('email').value = '';
        document.getElementById('pass').value = ''
    }
});

signupSubmitBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission for demonstration
//   alert('Signup button clicked');
    let createName = document.getElementById('createName').value
    let createEmail = document.getElementById('createEmail').value
    let createPass = document.getElementById('createPass').value

    // console.log(createName);
    // console.log(createEmail);
    // console.log(createPass);

    if (createName !== '' && createEmail !== '' && createPass !== '') {
        Swal.fire({
            title: "Good job!",
            text: "You SignUp Our Page",
            icon: "success"
        }).then(() => {
            
            localStorage.setItem('mail', createEmail);
            localStorage.setItem('name', createName);
            localStorage.setItem('pass', createPass);
            localStorage.setItem('tr', 'true');
            
            
            window.location.href = 'index.html'
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "SomeThing is Missing",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }

});