function slika() {
    var image = document.getElementById('nevena');
    if (image.src.match("Nevena.jpg")) {
        image.src = "Nevenaa.jpg";
    }
    else {
        image.src = "Nevena.jpg";
    }
}
function slika2() {
    var image = document.getElementById('nemanja');
    if (image.src.match("Nemanja.jpg")) {
        image.src = "Nemanjaa.jpg";
    }
    else {
        image.src = "Nemanja.jpg";
    }
}

document.getElementById("uploadButton").onclick = () => {
    let fileElement = document.getElementById('fileInput')

    if (fileElement.files.length === 0) {
      alert('please choose a file')
      return
    }

    let file = fileElement.files[0]

    let formData = new FormData();
    formData.set('file', file);
}

const name = document.getElementById('name')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const surname = document.getElementById('surname')
const poruka = document.getElementById('poruka')
const uspesno = document.getElementById('uspesno')


if(!alert){
  uspesno.innerText = "Uspesno poslato!";
}

form.addEventListener('submit', (e) => {
  
  if (name.value == null)  {
    alert('Popunite polja sa zvezdicom!');
    return false;
  }
  if (surname.value === ' ' || surname.value == null) {
    alert('Popunite polja sa zvezdicom!');
    return false;
  }

  if (poruka.value.length > 500 || poruka.value.length < 10) {
    alert('Poruka mora imati od 10 do 500 karaktera!');
    return false;
  }

})

////////////////////////////////////////////////////

function slovaIme() {
  var b = /^[A-Za-z]+$/;
  if ( name.value.match(b) ) {
      return true;
  } else {
      alert("Unesite ime! U polje za ime mogu biti uneta samo slova i jedna rec!");
      return false;
  }
}
function slovaPrezime() {
  var b = /^[A-Za-z]+$/;
  if ( surname.value.match(b) ) {
      return true;
  } else {
      alert("Unesite prezime! U polje za prezime mogu biti uneta samo slova i jedna rec!");
      return false;
  }
}
function formaBrojevi() {
  var b = /^\+\d+(\.\d+)?/;
  if ( telefon.value.match(b) ) {
      return true;
  } else {
      alert("U polje za broj telefona mogu biti uneti samo brojevi i + ukoliko se nalazi na prvom mestu!");
      return false;
  }
}