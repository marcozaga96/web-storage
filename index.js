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

let contatore = sessionStorage.getItem("contatore")
  ? parseInt(sessionStorage.getItem("contatore"))
  : 0;

function aggiornaContatore() {
  contatore++;
  document.getElementById("contatore").innerText = contatore;
  sessionStorage.setItem("contatore", contatore);
}
setInterval(aggiornaContatore, 1000);
