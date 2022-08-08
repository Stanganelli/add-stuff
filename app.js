let data = [
  {
    nome: "Enzo",
    idade: 17,
    hasAnos: true,
    hastem: true,
    //mais chad
  },
  {
    nome: "Eric",
    idade: 18,
    hasAnos: true,
    hastem: true,
  },
  {
    nome: "Allan",
    idade: 42,
    hasAnos: true,
    hastem: true,
  },
  {
    nome: "Erica",
    idade: 17,
    hasAnos: true,
    hastem: true,
  },
  {
    nome: "Aghata",
    idade: 17,
    hasAnos: true,
    hastem: true,
  },
  {
    nome: "Seu nome",
    idade: " Pode estar aqui",
    hasAnos: false,
    hastem: false,
  },
  /* ai só colocar o quanto mais quiser aqui  usando
    {
          nome: "O que você quiser",
          idade: 69
      }, 
  que vai direto para o html 
  */
];

const info = document.querySelector("#info");
let detalhes = data.map(function(item) {
  if (item.hasAnos) {
    anos = " anos ";
  }
  else {
    anos = "";
  }
  if (item.hastem) {
    tem = " tem ";
  }
  else {
    tem = "";
  }
  return ("<div>" + item.nome + "" + tem + item.idade + anos + "</div>"
    //alterando essa linha    +++  
  )
});
info.innerHTML = detalhes.join("");
