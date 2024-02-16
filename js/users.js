function listUserID() {
     let id = 0
     let data = []
     for (let x=0; x < localStorage.length; x++) {
         if (localStorage.key(x).startsWith("username") || localStorage.key(x).startsWith("email") || localStorage.key(x).startsWith("password")) data.push(localStorage.key(x)) 
     }
     return data.sort().filter((x) => x.startsWith("username")).map((x) => {
         return {
             id: x.replace("username-", ""), 
             index: Number(x.replace("username-users", "")) - 1, 
             username: localStorage.getItem(x), 
             email: localStorage.getItem("email-users" + x.replace("username-users", "")), 
             password: localStorage.getItem("password-users" + x.replace("username-users", "")), 
         }
     })
}

function checksUser(username) {
     return listUserID().filter((x) => (x.username == username || x.email == username)).length > 0
}

function createUserID() {
     const id = listUserID().length + 1
     return { 
         id: id, 
         username: "username-users" + id, 
         email: "email-users" + id, 
         password: "password-users" + id, 
     }
}

function searchsUserID(username) {
     if (!checksUser(username)) return null
     return listUserID().find((x) => (x.username == username || x.email == username))
}

function changePassword(username, password) {
     if (!checksUser(username)) return null
     const { id } = searchsUserID(username) 
     localStorage.setItem("password-" + id, password) 
     return searchsUserID(username)
}

function usersSignup() {
    const numbers = /[0-9]/g;
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const username = document.querySelector(".create-username").value
    const email = document.querySelector(".create-email").value
    const createPassword = document.querySelector(".create-password").value
    const confirmPassword = document.querySelector(".confirm-password").value
    const loginForm = document.querySelector(".login")
    const signupForm = document.querySelector(".signup")
    const forgotPasswordForm = document.querySelector(".forgot-password")
    if (username.length == 0) {
        alert("Masukan nama")
    } else if (email.length == 0) {
        alert("Masukan email")
    } else if (createPassword.length == 0 || confirmPassword.length == 0) {
        alert("Masukan password")
    } else if (createPassword.length > 8 || confirmPassword.length > 8) {
        alert("Maximum 8 character password")
    } else if (!createPassword.match(numbers) || !confirmPassword.match(numbers)) {
        alert("Masukan angka")
    } else if (!createPassword.match(upperCaseLetters) || !confirmPassword.match(upperCaseLetters)) {
        alert("Masukan huruf besar")
    } else if (!createPassword.match(lowerCaseLetters) || !confirmPassword.match(lowerCaseLetters)) {
        alert("Masukan huruf kecil")
    } else if (createPassword !== confirmPassword) {
        alert("Failed Confirm password")
    } else if (checksUser(username) || checksUser(email)) {
        alert("Account sudah ada")
    } else {
        const options = createUserID() 
        localStorage.setItem(options.username, username)
        localStorage.setItem(options.email, email)
        localStorage.setItem(options.password, confirmPassword)
        loginForm.style.display = "block"
        signupForm.style.display = "none"
        forgotPasswordForm.style.display = "none"
        alert("Your account has been created")
    }
}

function usersLogin() {
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;
    const username = document.querySelector(".username").value
    const password = document.querySelector(".password").value
    if (username.length == 0) {
        alert("Masukan nama atau email")
    } else if (password.length == 0) {
        alert("Masukan password")
    } else if (password.length > 8) {
        alert("Maximum 8 character password")
    } else if (!password.match(numbers)) {
        alert("Masukan angka")
    } else if (!password.match(upperCaseLetters)) {
        alert("Masukan huruf besar")
    } else if (!password.match(lowerCaseLetters)) {
        alert("Masukan huruf kecil")
    } else if (checksUser(username) && searchsUserID(username).password == password) {
        window.location = "dashboard.html"
    } else {
        alert("Account not found")
    }
}

function usersSave() {
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;
    const username = document.querySelector(".forgot-username").value
    const createPassword = document.querySelector(".create-new-password").value
    const confirmPassword = document.querySelector(".confirm-new-password").value
    const loginForm = document.querySelector(".login")
    const signupForm = document.querySelector(".signup")
    const forgotPasswordForm = document.querySelector(".forgot-password")
    if (username.length == 0) {
        alert("Masukan nama atau email")
    } else if (createPassword.length == 0 || confirmPassword.length == 0) {
        alert("Masukan password")
    } else if (createPassword.length > 8 || confirmPassword.length > 8) {
        alert("Maximum 8 character password")
    } else if (!createPassword.match(numbers) || !confirmPassword.match(numbers)) {
        alert("Masukan angka")
    } else if (!createPassword.match(upperCaseLetters) || !confirmPassword.match(upperCaseLetters)) {
        alert("Masukan huruf besar")
    } else if (!createPassword.match(lowerCaseLetters) || !confirmPassword.match(lowerCaseLetters)) {
        alert("Masukan huruf kecil")
    } else if (createPassword !== confirmPassword) {
        alert("Failed Confirm password")
    } else if (checksUser(username)) {
        changePassword(username, confirmPassword)
        loginForm.style.display = "block"
        signupForm.style.display = "none"
        forgotPasswordForm.style.display = "none"
        alert("Success change password")
    } else {
        alert("Account not found")
    }
}