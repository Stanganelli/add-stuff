let data = [
    {
        nome: "Enzo",
        idade: 17
//mais chad
    },
    {
        nome: "Eric",
        idade: 18
    },
    {
        nome: "Allan",
        idade: 17
    },
    {
        nome: "Erica",
        idade: 17
    },
    {
        nome: "Aghata",
        idade: 17
    }, 
/* ai só colocar o quanto mais quiser aqui  usando
  {
        nome: "O que você quiser",
        idade: 69
    }, 

que vai direto para o html 
*/
];

const info = document.querySelector("info");
let detalhes = data.map(function(item){
return (`<div>` = item.nome + "" + "é " + item.idade + " anos " + `</div>`
//alterando essa linha      
)
});
info.innerHTML = detalhes.join("");
