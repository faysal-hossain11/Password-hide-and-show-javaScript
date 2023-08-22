let password = document.getElementById("password");
let eyeicon = document.getElementById("eyeIcon");

 eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "./img/shwo.png";
    }
    else{
        password.type = "password";
        eyeicon.src = "./img/hidden.png";
    }
 }
