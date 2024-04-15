const squadreCalcio = [
    {
        name: "Milan",
        points: "",
        fouls: ""
    },
    {
        name: "Pippo FC",
        points: "",
        fouls: ""
    },
    {
        name: "AC Mugiwara",
        points: "",
        fouls: ""
    }
];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

squadreCalcio.forEach((squadra) => {
    squadra.points = getRandomNumber(0, 100);
    squadra.fouls = getRandomNumber(0, 50);

    console.log(`${squadra.name}: Punti = ${squadra.points}, Falli = ${squadra.fouls}`);
});

const squadreFalliSubiti = squadreCalcio.map(({ name, fouls }) => ({ name, fouls }));

console.log(squadreFalliSubiti);
