function generateProfile(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let gender = document.getElementById("gender").value;

document.getElementById("displayName").innerText = name;
document.getElementById("displayEmail").innerText = email;
document.getElementById("displayPhone").innerText = phone;
document.getElementById("displayGender").innerText = gender;

}