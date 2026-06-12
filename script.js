document.addEventListener("DOMContentLoaded", () => {

  // welcome
  alert("Welcome to Student Dashboard!");

  // dark mode
  const btn = document.getElementById("darkBtn");

  if(btn){
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }

  // table row highlight
  const rows = document.querySelectorAll("tr");

  rows.forEach(row => {
    row.addEventListener("click", () => {

      rows.forEach(r => r.classList.remove("active"));

      row.classList.add("active");
    });
  });

});