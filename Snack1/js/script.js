const biciCorsa = [
    {
        name: "Pippo-bike",
        weight: 7.0
    },
    {
        name: "Faster-miao",
        weight: 6.5
    },
    {
        name: "Straw-hat-bike",
        weight: 5.5
    }
];

let biciLeggera = biciCorsa[0];

biciCorsa.forEach((bici) => {
    if (bici.weight < biciLeggera.weight) {
        biciLeggera = bici;
    }
});

console.log(`Questo è il peso della bici più leggera: ${biciLeggera.weight}`);

const pesoBiciElement = document.getElementById("peso-bici");
pesoBiciElement.append(`Questo è il peso della bici più leggera: ${biciLeggera.weight}`);
