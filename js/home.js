let allusers = JSON.parse(localStorage.getItem("users")) ;
let useridx = JSON.parse(localStorage.getItem("userlogin"))

let welcomelogin = document.querySelector('.welcome')

welcomelogin.innerHTML = `Welcome ${allusers[useridx].username} 🥰🥰`