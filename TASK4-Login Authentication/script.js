let signupBtn = document.getElementById("signupBtn");
        let signinBtn = document.getElementById("signinBtn");
        let nameField = document.getElementById("nameField");
        let title = document.getElementById("title");


        signinBtn.onclick = function(){
            nameField.style.maxHeight = "0";
            title.innerHTML = "Sign In";
            signupBtn.classList.add("disable");
            signinBtn.classList.remove("disable");

        }
        signupBtn.onclick = function(){
            nameField.style.maxHeight = "65px";
            title.innerHTML = "Sign Up";
            signupBtn.classList.remove("disable");
            signinBtn.classList.add("disable");

        }
        //validation code for inputs
        var email = document.forms['myForm']['email'];
        var password = document.forms['myForm']['password'];

        var email_error = document.getElementById('email_error');
        var pass_error = document.getElementById('pass_error');

        email.addEventListener('textInput', email_verify);
        password.addEventListener('textInput', pass_verify);

        function validate(){
            if(email.value.length < 9) {
                email.style.border = "1px solid red";
                email_error.style.display = "block";
                email.focus();
                return false;
            }
            if(password.value.length < 6) {
                password.style.border = "1px solid red";
                pass_error.style.display = "block";
                password.focus();
                return false;
            }
        }
        function email_verify(){
            if(email.value.length >= 8){
                email.style.border = "1px solid silver";
                email_error.style.display = "none";
                return true;
            }
        }
        function pass_verify(){
            if(password.value.length >= 5){
                password.style.border = "1px solid silver";
                pass_error.style.display = "none";
                return true;
            }
        }