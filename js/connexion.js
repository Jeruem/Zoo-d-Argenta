
const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnConnexion = document.getElementById("btnConnexion");

btnConnexion.addEventListener("click", checkCredentials);

function checkCredentials(){
    // Appel de l'API//
    if (mailInput.value== "admin@mail.com" && passwordInput.value == "123"){
       
        //Il faudra récupérer le vrai token

        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        setToken(token);

        //placer ce token en cookie

    
        setCookie(RoleCookieName, "admin", 7);
        window.location.replace("/");
    }

    if (mailInput.value== "employe@mail.com" && passwordInput.value == "1234"){
       
        //Il faudra récupérer le vrai token

        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        setToken(token);

        //placer ce token en cookie

    
        setCookie(RoleCookieName, "employe", 7);
        window.location.replace("/");
    }

    if (mailInput.value== "veterinaire@mail.com" && passwordInput.value == "12345"){
       
        //Il faudra récupérer le vrai token

        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        setToken(token);

        //placer ce token en cookie

    
        setCookie(RoleCookieName, "employe", 7);
        window.location.replace("/");
    }

    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}

