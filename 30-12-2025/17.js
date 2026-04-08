document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const gender = document.getElementById("gender").value;

  const output = `
    <strong>Full Name:</strong> ${fullname} <br>
    <strong>Email:</strong> ${email} <br>
    <strong>Phone:</strong> ${phone} <br>
    <strong>Gender:</strong> ${gender}
  `;

  document.getElementById("output").innerHTML = output;
});
