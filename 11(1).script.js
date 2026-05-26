let count =0;

function addStudent(){

if(count >= 10){
alert("Only 10 students allowed");
return;
}

let name = document.getElementById("name").value;
let dept = document.getElementById("dept").value;
let cgpa = document.getElementById("cgpa").value;
let mobile = document.getElementById("mobile").value;

if(name=="" || dept=="" || cgpa=="" || mobile==""){
alert("Please fill all fields");
return;
}

let table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];

let row = table.insertRow();

row.insertCell(0).innerHTML = name;
row.insertCell(1).innerHTML = dept;
row.insertCell(2).innerHTML = cgpa;
row.insertCell(3).innerHTML = mobile;

count++;

document.getElementById("name").value="";
document.getElementById("dept").value="";
document.getElementById("cgpa").value="";
document.getElementById("mobile").value="";
}
