const automobili = [
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
    { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
    { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
    { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
    { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
    { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
    { marca: "Audi", modello: "A3", alimentazione: "diesel" },
    { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
    { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
  ];

const autoBenzina = [];
const autoDiesel = [];
const altreAuto = [];

for (let i = 0; i < automobili.length; i++) {
    const auto = automobili[i];
    if (auto.alimentazione === "benzina") {
        autoBenzina.push(auto);
    } else if (auto.alimentazione === "diesel") {
        autoDiesel.push(auto);
    } else {
        altreAuto.push(auto);
    }
}

console.log("Auto a benzina:", autoBenzina);
console.log("Auto a diesel:", autoDiesel);
console.log("Altre auto:", altreAuto);