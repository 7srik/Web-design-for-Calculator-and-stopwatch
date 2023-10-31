$(document).ready(function () {
    $("#usercheck").hide();
    let usernameError = true;
    $("#usernames").keyup(function () {
        validateUsername();
    });

    $("#submitbtn").prop("disabled", true);

    function validateUsername() {
        let usernameValue = $("#usernames").val();
        let regex = /^[A-Za-z0-9]+$/;
        if (usernameValue.length == "") {
            $("#usercheck").show();
            usernameError = false;
            return false;
        } else if (usernameValue.length < 6 || usernameValue.length > 12) {
            $("#usercheck").show();
            $("#usercheck").html("*Username must contain more than 6 characters and less than 12 characters*");
            usernameError = false;
            return false;
        } else if (!regex.test(usernameValue)) {
            $("#usercheck").show();
            $("#usercheck").html("*Special Characters are not allowed in username*");
            usernameError = false;
            return false;
        } else {
            $("#usercheck").hide();
            usernameError = true;
        }
    }
    $("#emailcheck").hide();
    let emailError = true;
    $("#emails").keyup(function () {
        validateEmail();
    });

    function validateEmail() {
        let emailValue = $("#emails").val();
        let regex2 = /^([\w\.]+)@northeastern.edu$/;
        if (emailValue.length == "") {
            $("#emailcheck").show();
            emailError = false;
            return false;
        } else if (!regex2.test(emailValue)) {
            $("#emailcheck").show();
            $("#emailcheck").html("*Please provide your Northeastern Email Id.*");
            emailError = false;
            return false;
        } else if (emailValue.length < 20) {
            $("#emailcheck").show();
            $("#emailcheck").html("*Please enter a minimum of 3 characters before '@'*");
            emailError = false;
            return false;
        } else {
            $("#emailcheck").hide();
            emailError = true;
        }
    }

    $("#passcheck").hide();
    let passwordError = true;
    let regex3 = new RegExp("^(?=.*[a-z])");
    let regex4 = new RegExp("^(?=.*[A-Z])");
    let regex5 = new RegExp("^(?=.*[0-9])");
    $("#password").keyup(function () {
        validatePassword();
    });
    function validatePassword() {
        let passwordValue = $("#password").val();
        if (passwordValue.length == "") {
            $("#passcheck").show();
            passwordError = false;
            return false;
        }
        else if (passwordValue.length < 8) {
            $("#passcheck").show();
            $("#passcheck").html(
                "*Your password must contain atleast 8 characters*"
            );
            $("#passcheck").css("color");
            passwordError = false;
            return false;
        } else if (!regex3.test(passwordValue)) {
            $("#passcheck").show();
            $("#passcheck").html("*password must contain at least 1 alphabet in lowercase*");
            passwordError = false;
            return false;
        } else if (!regex4.test(passwordValue)) {
            $("#passcheck").show();
            $("#passcheck").html("*password must contain at least 1 alphabet in uppercase*");
            passwordError = false;
            return false;
        } else if (!regex5.test(passwordValue)) {
            $("#passcheck").show();
            $("#passcheck").html("*password must contain at least 1 numeric character*");
            passwordError = false;
            return false;
        } else {
            $("#passcheck").hide();
            passwordError = true;
        }
    }

    $("#confirmpasscheck").hide();
    let confirmpasswordError = true;
    $("#confirmpassword").keyup(function () {
        validateConfirmPassword();
    });
    
    function validateConfirmPassword() {
        let passwordValue = $("#password").val();
        let confirmPasswordValue = $("#confirmpassword").val();
        if (confirmPasswordValue.length == "") {
            $("#confirmpasscheck").show();
            confirmpasswordError = false;
            return false;
        } else if (passwordValue !== confirmPasswordValue) {
            $("#confirmpasscheck").show();
            $("#confirmpasscheck").html("*Passwords do not match*");
            confirmpasswordError = false;
            return false;
        } else {
            $("#confirmpasscheck").hide();
            confirmpasswordError = true;
        }
    }

    $("#usernames").keyup(function () {
        validateUsername();
        enableLoginButton();
    });
    
    $("#emails").keyup(function () {
        validateEmail();
        enableLoginButton();
    });
    
    $("#password").keyup(function () {
        validatePassword();
        enableLoginButton();
    });
    
    $("#confirmpassword").keyup(function () {
        validateConfirmPassword();
        enableLoginButton();
    });
    

    function enableLoginButton() {
        if (usernameError && emailError && passwordError && confirmPasswordError) {
            $("#submitbtn").prop("disabled", false);
        } else {
            $("#submitbtn").prop("disabled", false);
        }
    }
    
    $("#submitbtn").click(function () {
        event.preventDefault();
        validateUsername();
        validateEmail();
        validatePassword();
        validateConfirmPassword();
        if (
            usernameError == true &&
            passwordError == true &&
            confirmpasswordError == true &&
            emailError == true
        ) {
            localStorage.setItem("username", $("#usernames").val());
            $("#submitbtn").prop("disabled", false);
            $(this).closest('form').submit();
        } else {
            alert("Please fill all the required fields");
            return false;
        }
    });
    
});