/* Struktur des Json für und von der Datenbank */
var json = [
   {
      "ID":2,
      "Vorname":"Tomas",
      "Nachname":"Einstein",
      "Telefonnummer":"+49 839 82912",
      "Email":"Tomas.Einstein@t-systems4.de",
      "Plz":"92812",
      "Ort_Name":"Bushausen2",
      "Strasse":"rufbushausen2",
      "Hausnummer":"10p",
      "Passwort":"1.04.2006"   
   }
   ]


/* Modul um die eingetragen Daten des Admins für den User im Script in ein Json Object zu speichern */
const submitbutton = document.getElementById("submit");
submitbutton.addEventListener("click", function(event) {
Vornamenewdata = document.getElementById("input2").value;
Nachnamenewdata = document.getElementById("input3").value;
Telefonnumbernewdata = document.getElementById("input4").value;
Emailnewdata = document.getElementById("input5").value;
Plznewdata = document.getElementById("input6").value;
OrtNamenewdata = document.getElementById("input7").value;
Strassenewdata = document.getElementById("input8").value;
Hausnummernewdata = document.getElementById("input9").value;
Passwortnewdata = document.getElementById("input10").value;

let internalFormularJson = [
    {
        "Vorname": Vornamenewdata,
        "Nachname": Nachnamenewdata,
        "Telefonnumber": Telefonnumbernewdata,
        "Email": Emailnewdata,
        "Plz": Plznewdata,
        "Ort_Name": OrtNamenewdata,
        "Strasse": Strassenewdata,
        "Hausnummer": Hausnummernewdata,
        "Passwort": Passwortnewdata
    }
]
console.log(internalFormularJson[0]);
});
 
/* Modul um die relevanten USerDaten für den User bereit zu stellen aus dem Json Object */
window.onload = function getJSONData(){
   let VornameData = json[0].Vorname;
   document.getElementById("Vorname").innerHTML = VornameData;   
   let NachnameData = json[0].Nachname;
   document.getElementById("Nachname").innerHTML = NachnameData;
   let TelefonnummerData = json[0].Telefonnummer;
   document.getElementById("Telefonnummer").innerHTML = TelefonnummerData;
   let EmailData = json[0].Email;
   document.getElementById("Email").innerHTML = EmailData;
   let PlzData = json[0].Plz;
   document.getElementById("Plz").innerHTML = PlzData;
   let OrtNameData = json[0].Ort_Name;
   document.getElementById("OrtName").innerHTML = OrtNameData;
   let StrasseData = json[0].Strasse;
   document.getElementById("Strasse").innerHTML = StrasseData;
   let HausnummerData = json[0].Hausnummer;
   document.getElementById("Hausnummer").innerHTML = HausnummerData;
   let PasswortData = json[0].Passwort;
   document.getElementById("Passwort").innerHTML = PasswortData;
}

/* Modul um die angegebenen Anmeldedaten des Users in ein Json Object zu speichern,
 um diese dann überprüfen zu können */
var loginbutton = document.getElementById("login");
loginbutton.addEventListener("click", function(event) {
event.preventDefault();
var username = document.getElementById("user_email").value;
var password = document.getElementById("user_password").value;

var datajson = [
{'username': username,
 'password' : password}];

console.log(datajson[0])
});


/* Modul um häufige Teile im Html über Js zu laden */
/* fetch('fusszeile.html')
.then(response => response.text())
.then(text => document.getElementById('footer').innerHTML = text); */
