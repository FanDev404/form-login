const linkLogin = document.querySelectorAll(".link-login")
const linkSignup = document.querySelectorAll(".link-signup")
const linkForgotPassword = document.querySelectorAll(".link-forgot-password")
const pwShowHide = document.querySelectorAll("#password-eye-icon")
const createPwShowHide = document.querySelectorAll("#create-password-eye-icon")
const confirmPwShowHide = document.querySelectorAll("#confirm-password-eye-icon")
const loginForm = document.querySelector(".login")
const signupForm = document.querySelector(".signup")
const forgotPasswordForm = document.querySelector(".forgot-password")

linkLogin.forEach((link) => {
    link.addEventListener("click", e => {
        loginForm.style.display = "block"
        signupForm.style.display = "none"
        forgotPasswordForm.style.display = "none"
    }) 
})

linkSignup.forEach((link) => {
    link.addEventListener("click", e => {
        signupForm.style.display = "block"
        loginForm.style.display = "none"
        forgotPasswordForm.style.display = "none"
    }) 
})

linkForgotPassword.forEach((link) => {
    link.addEventListener("click", e => {
        forgotPasswordForm.style.display = "block"
        loginForm.style.display = "none"
        signupForm.style.display = "none"
    }) 
})

pwShowHide.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password")
        pwFields.forEach((password) => {
            if (password.type === "password") {
                password.type = "text"
                eyeIcon.classList.replace("bx-hide", "bx-show")
            } else {
                password.type = "password"
                eyeIcon.classList.replace("bx-show", "bx-hide")
            }
        })
    })
})

createPwShowHide.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".create-password")
        pwFields.forEach((password) => {
            if (password.type === "password") {
                password.type = "text"
                eyeIcon.classList.replace("bx-hide", "bx-show")
            } else {
                password.type = "password"
                eyeIcon.classList.replace("bx-show", "bx-hide")
            }
        })
    })
})

confirmPwShowHide.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".confirm-password")
        pwFields.forEach((password) => {
            if (password.type === "password") {
                password.type = "text"
                eyeIcon.classList.replace("bx-hide", "bx-show")
            } else {
                password.type = "password"
                eyeIcon.classList.replace("bx-show", "bx-hide")
            }
        })
    })
})

function checks () {
    if (loginForm.style.display !== "block" && loginForm.style.display !== "none" && signupForm.style.display !== "block" && signupForm.style.display !== "none" && forgotPasswordForm.style.display !== "block" && forgotPasswordForm.style.display !== "none") {
        signupForm.style.display = "none"
        forgotPasswordForm.style.display = "none"
    }
}

checks() 
