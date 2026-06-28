let userName = "bigboss"
let password = "Bigboss001#"


let usernameInput = document.getElementById("username")
let passwordInput = document.getElementById("password")

let loginShi = document.getElementById("loginShi")
let content = document.getElementById("content")

loginShi.addEventListener("submit", function(e) {
    e.preventDefault()

    if (usernameInput.value == userName  && passwordInput.value == password) {
        content.innerHTML = "Login Successful"
        content.style.color = "green"
    }
    else{
        content.innerHTML = "Incorrect Credentials"
        content.style.color = "red"
    }
})