const names = document.getElementById("name");
const salva = document.getElementById("salva");
const cancella = document.getElementById("cancella");
const savedNome = document.getElementById("savedNome");

salva.addEventListener("click", () => {
  const utente = names.value;
  localStorage.setItem("name", utente);
});

cancella.addEventListener("click", () => {
  localStorage.removeItem("name");
});

savedNome.innerText += localStorage.getItem("name");
