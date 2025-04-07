function demo() {
    var duzina = document.getElementById("duzina").value;

    if(duzina < 1){
        alert("Unesite duzinu stopala!");
        return false;
    }
    
    if(duzina > 30){
        alert('Uneli ste preveliki broj!');
        return false;
    }
    if(duzina < 10){
        alert('Uneli ste premali broj!');
        return false;
    }
    
    alert("Vasa velicina je " + (Math.ceil((duzina * 48) / 30)));
    return false;
}