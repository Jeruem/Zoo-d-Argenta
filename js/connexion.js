
const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnConnexion = document.getElementById("btnConnexion");

btnConnexion.addEventListener("click", checkCredentials);

function checkCredentials(){
    // Appel de l'API//
    if (mailInput.value== "test@mail.com" && passwordInput.value == "123"){
        alert("t'es connecté frere");
        //Il faudra récupérer le vrai token

        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        setToken(token);

        //placer ce token en cookie

    
        setCookie(RoleCookieName, "admin", 7);
        window.location.replace("/");
    }

    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}

