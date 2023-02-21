var checklistdata = {"checklist": [
            {
                "title": "Begrüßung des Mitarbeiters",
                "isDone": true
            },
            {
                "title": "Arbeitsmittel einrichten",
                "isDone": true
            },
            {
                "title": "Am ersten Meeting teilnehmen",
                "isDone": false
            },
            {
                "title": "Onboarding-Prozess abgeschlossen",
                "isDone": false
            }
        ]
    }


for (var i = 0; i < checklistdata.checklist.length; i++) {
var maindiv = document.getElementById('maindiv');
var checkbox = document.createElement('input');
var label = document.createElement('label');
var breakpoint = document.createElement('br');
checkbox.type = 'checkbox';
checkbox.name = checklistdata.checklist[i].title;
checkbox.value = checklistdata.checklist[i].isDone;
checkbox.checked = checklistdata.checklist[i].isDone;
checkbox.id = "check-" + i;
checkbox.className = "checkbox";
checkbox.setAttribute("data-checkbox", i) 

label.htmlFor = checklistdata.checklist[i].title;
label.appendChild(document.createTextNode('Das ist das Label für die ' + checklistdata.checklist[i].title + ' Checkbox'));

maindiv.appendChild(checkbox);
maindiv.appendChild(label);
maindiv.appendChild(breakpoint);

}

var safebutton = document.getElementById('safebutton');
safebutton.addEventListener('click', function(event) {
var classcheckbox = document.getElementsByClassName("checkbox")
for (var i = 0; i < checklistdata.checklist.length; i++){
checklistdata.checklist[i].isDone = classcheckbox[i].checked;
};
console.log(checklistdata.checklist);
});



