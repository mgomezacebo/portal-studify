// security.js — Protección de páginas privadas del portal Studyfy

(function () {
  // Comprobación del token de autorización
  const autorizado = localStorage.getItem("autorizado");

  // Si no existe o no coincide → redirigir al inicio de sesión
  if (autorizado !== "autorizado") {
    window.location.href = "index.html";
  }
})();
