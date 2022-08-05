let data = [
    {
        nome: "Enzo",
        idade: 17
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
];

const info = document.querySelector("info");
let detalhes = data.map(function(item){
return (`<div>` = item.nome + "" + "é " + item.idade + " anos " + `</div>`
)
});
info.innerHTML = detalhes.join("");
