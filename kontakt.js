function validacija(){
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;
    var ns = /^[A-Za-z]+$/;

    error_message.style.padding = "10px";
    
    
    if(name < 1){
        text = "Unesite ime";
        error_message.innerHTML = text;
        return false;
    }
    if(!name.match(ns)){
        text = "U polje za ime mogu biti uneta samo slova i jedna rec!";
        error_message.innerHTML = text;
        return false;
    }
    if(!surname.match(ns)){
        text = "U polje za prezime mogu biti uneta samo slova i jedna rec!";
        error_message.innerHTML = text;
        return false;
    }
    if(surname < 1){
        text = "Unesite prezime";
        error_message.innerHTML = text;
        return false;
    }
    if(phone < 1){
        text = "Unesite broj telefona";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.indexOf("+") == -1){
        text = "U polje za telefon mozete uneti samo brojeve i znak + ako je na pocetku";
        error_message.innerHTML = text;
        return false;
    }
    if(subject < 1){
        text = "Unesite naslov poruke";
        error_message.innerHTML = text;
        return false;
    }
    if(message.lenght < 1){
        text = "Unesite poruku";
        error_message.innerHTML = text;
        return false;
    }
    if(message.lenght < 5 || message.lenght > 500){
        text = "Poruka mora biti od 5 do 500 karaktera";
        error_message.innerHTML = text;
        return false;
    }
    
    alert ("Uspesno poslato!")

    return false;
}