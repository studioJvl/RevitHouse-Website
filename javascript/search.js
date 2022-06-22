function buscar() {
  let listagem = ["cadeiras"];
  let searchInput = document.getElementById("input");
  let itemDeBusca = searchInput.value;
  listagem.forEach((prop) => {
    if (itemDeBusca == prop) {
      window.open("../javascript/index.html");
    } else {
      window.open("https://www.google.com/");
    }
  });
}
