const submitbutton = document.getElementById("submit");

submitbutton.addEventListener("click", function(event) {
    
IDnewdata = document.getElementById("input1").value;
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
        "ID": IDnewdata,
        "Vorname": Vornamenewdata,
        "Nachname": Nachnamenewdata,
        "Telefonnumber": Telefonnumbernewdata,
        "Email": Emailnewdata,
        "Plz": Plznewdata,
        "OrtName": OrtNamenewdata,
        "Strasse": Strassenewdata,
        "Hausnummer": Hausnummernewdata,
        "Passwort": Passwortnewdata
    }
]
console.log(internalFormularJson);
});