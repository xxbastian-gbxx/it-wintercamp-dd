var checklistdata = [checklist1=["Begrüßung des Mitarbeiters", true], checklist2=["Arbeitsmittel einrichten", true],
                     checklist3=["Am ersten Meeting teilnehmen", false], checklist4=["Onboarding-Prozess abgeschlossen", false]];

for (var i = 0; i < checklistdata.length; i++) {
var maindiv = document.getElementById('maindiv');
var checkbox = document.createElement('input');
var label = document.createElement('label');
var breakpoint = document.createElement('br');
checkbox.type = 'checkbox';
checkbox.name = checklistdata[i][0];
checkbox.value = checklistdata[i][1];
checkbox.checked = checklistdata[i][1];
checkbox.id = "check-" + i;
checkbox.className = "checkbox";
checkbox.setAttribute("data-checkbox", i) ;

label.htmlFor = checklistdata[i][0];
label.appendChild(document.createTextNode('Das ist das Label für die ' + checklistdata[i][0] + ' Checkbox'));

maindiv.appendChild(checkbox);
maindiv.appendChild(label);
maindiv.appendChild(breakpoint);
}

var safebutton = document.getElementById('safebutton');
safebutton.addEventListener('click', function(event) {
var classcheckbox = document.getElementsByClassName("checkbox")
for (var i = 0; i < checklistdata.length; i++){
checklistdata[i][1] = classcheckbox[i].checked;}
console.log(checklistdata);
});