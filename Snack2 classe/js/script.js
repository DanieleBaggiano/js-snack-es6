array = [
    {
        nome : "Pippo",
        cognome : "Verdi",
        età : 30
    },
    {
        nome : "Pluto",
        cognome : "Rossi",
        età : 16
    },
    {
        nome : "Paperino",
        cognome : "Blu",
        età : 34
    },
    {
        nome : "Topolino",
        cognome : "Giallo",
        età : 22
    }
];

let guidare = [];

for (let i = 0; i < array.length; i++) {
    let persona = array[i];
    let frase = persona.nome + " " + persona.cognome + " ";

    if (persona.età >= 18) {
        frase += "Può guidare!";
    } else {
        frase += "Non può guidare!";
    }
    guidare.push(frase);
};

console.log("Hanno l'età per guidare?");
for (let j = 0; j < guidare.length; j++) {
    console.log(guidare[j]);
}