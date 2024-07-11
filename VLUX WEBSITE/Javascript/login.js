document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".screen-1");
    const registerForm = document.querySelector(".screen-2");
    const signUpLink = document.querySelector(".footer span:last-child");
    const signInLink = document.querySelector(".footer-register span:last-child");

    registerForm.style.display = "none"; // Initially hide the register form

    signUpLink.addEventListener("click", function () {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    signInLink.addEventListener("click", function () {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });
});
