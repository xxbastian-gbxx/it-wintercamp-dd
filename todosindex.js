var todo = [{
        "T_ID": "1",
        "ID": "4",
        "Aufgabenstellung": "Zusendung unterschriebener Arbeitsvertrag\u200b.",
        "Start": "-14",
        "Ende": "-7",
        "Fertig": "0",
        "Ergebnis": ""    }, {
        "T_ID": "2",
        "ID": "4",
        "Aufgabenstellung": "Zusendung des polizeilichen F\u00fchrungszeugnisses\u200b",
        "Start": "-21",
        "Ende": "-14",
        "Fertig": "1",
        "Ergebnis": ""    }, {
        "T_ID": "3",
        "ID": "4",
        "Aufgabenstellung": "Arbeitsschutzunterweisung",
        "Start": "0",
        "Ende": "1",
        "Fertig": "0",
        "Ergebnis": ""    }, {
        "T_ID": "4",
        "ID": "4",
        "Aufgabenstellung": "Einladung zum Welcome-Day\u200b",
        "Start": "-21",
        "Ende": "-14",
        "Fertig": "1",
        "Ergebnis": ""    
    }];

let checkbox1 = document.createElement("input");
    checkbox1.setAttribute("type", "checkbox");
    checkbox1.setAttribute("class", "task-checkbox");
    checkbox1.setAttribute("id", "task1");
    checkbox1.setAttribute("name", "task1");
let checkbox2 = document.createElement("input");
    checkbox2.setAttribute("type", "checkbox");
    checkbox2.setAttribute("class", "task-checkbox");
    checkbox2.setAttribute("id", "task2");
    checkbox2.setAttribute("name", "task2");
let checkbox3 = document.createElement("input");
    checkbox3.setAttribute("type", "checkbox");
    checkbox3.setAttribute("class", "task-checkbox");
    checkbox3.setAttribute("id", "task3");
    checkbox3.setAttribute("name", "task3");
let checkbox4 = document.createElement("input");
    checkbox4.setAttribute("type", "checkbox");
    checkbox4.setAttribute("class", "task-checkbox");
    checkbox4.setAttribute("id", "task4");
    checkbox4.setAttribute("name", "task4");


for (i = 0; i < todo.length; i++) {
if (todo[i].Fertig == "0") {
    if (i == 0){
        checkbox1.checked = false;
        checkbox1.value = false;
        console.log(checkbox1.value)
    } else if (i == 1){
        checkbox2.checked = false;
        checkbox2.value = false;
        console.log(checkbox2.value)   
    } else if (i == 2){
        checkbox3.checked = false;
        checkbox3.value = false;
        console.log(checkbox3.value)
    } else if (i == 3){
        checkbox4.checked = false;
        checkbox4.value = false;
        console.log(checkbox4.value)
    }};
if (todo[i].Fertig == "1") {
    if (i == 0){
        checkbox1.checked = true;
        checkbox1.value = true;
        console.log(checkbox1.value)
    } else if (i == 1){
        checkbox2.checked = true;
        checkbox2.value = true;
        console.log(checkbox2.value)   
    } else if (i == 2){
        checkbox3.checked = true;
        checkbox3.value = true;
        console.log(checkbox3.value)
    } else if (i == 3){
        checkbox4.checked = true;
        checkbox4.value = true;
        console.log(checkbox4.value)
}}};



classtaskdiv1 = document.createElement("div");
classtaskdiv2 = document.createElement("div");
classtaskdiv3 = document.createElement("div");
classtaskdiv4 = document.createElement("div");

window.onload = function() {
    var maindivtodo = document.getElementById("maindivtodo");
    array = [1, 2, 3, 4]
    for (i = 1; i <= array.length; i++) {

    classtaskdiv1.setAttribute("class", "task");
    classtaskdiv2.setAttribute("class", "task");
    classtaskdiv3.setAttribute("class", "task");
    classtaskdiv4.setAttribute("class", "task");

    classtasklabeldiv = document.createElement("div");
    classtasklabeldiv.setAttribute("class", "task-label");
    classtaska = document.createElement("a");
    classtaska.setAttribute("class", "task-title");
    classtaska.innerHTML = "To-Do Item " + i;
    classtaskspan = document.createElement("span");
    classtaskspan.setAttribute("class", "task-deadline");
    classtaskspan.innerHTML = "(Deadline: 31. März 2023)"; 
    if (i == 1) {
        classtaskdiv1.appendChild(checkbox1);
        classtaskdiv1.appendChild(classtasklabeldiv);
    } else if (i == 2) {
       classtaskdiv2.appendChild(checkbox2);
       classtaskdiv2.appendChild(classtasklabeldiv);
    } else if (i == 3) {
        classtaskdiv3.appendChild(checkbox3);
        classtaskdiv3.appendChild(classtasklabeldiv);
    } else if (i == 4) {
        classtaskdiv4.appendChild(checkbox4);
        classtaskdiv4.appendChild(classtasklabeldiv);
    };
    classtasklabeldiv.appendChild(classtaska);
    classtasklabeldiv.appendChild(classtaskspan);
    maindivtodo.appendChild(classtaskdiv1);
    maindivtodo.appendChild(classtaskdiv2);
    maindivtodo.appendChild(classtaskdiv3);
    maindivtodo.appendChild(classtaskdiv4);
    }
    
    popuptask1div = document.createElement("div");
    popuptask1div.setAttribute("class", "task-1-popup");
    classuploadconainerdiv = document.createElement("div");
    classuploadconainerdiv.setAttribute("class", "upload-container");
    h1 = document.createElement("h1")
    h1.innerHTML = "Dokument hochladen";
    form = document.createElement("form");
    form.setAttribute("action", "#");
    form.setAttribute("method", "post")
    form.setAttribute("enctype", "multipart/form-data");
    classuploadconainerdiv.appendChild(h1);
    labelfordocument = document.createElement("label");
    labelfordocument.setAttribute("for", "document");
    labelfordocument.innerHTML = "Wähle ein Dokument aus:";
    inputtypefile = document.createElement("input");
    inputtypefile.setAttribute("type", "file");
    inputtypefile.setAttribute("id", "document");
    inputtypefile.setAttribute("name","document");
    buttontypesubmit = document.createElement("button");
    buttontypesubmit.setAttribute("type", "submit");
    buttontypesubmit.innerHTML = "Hochladen";
    form.appendChild(labelfordocument);
    form.appendChild(inputtypefile);
    form.appendChild(buttontypesubmit);
    classuploadconainerdiv.appendChild(form);
    popuptask1div.appendChild(classuploadconainerdiv);
    maindivtodo.appendChild(popuptask1div);
    console.log(maindivtodo);
    console.log(checkbox1);
    popuptask1div.appendChild(classuploadconainerdiv);

};



