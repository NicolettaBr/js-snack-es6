//ES.1
//Creare un array di oggetti: 
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal 

const biciclette = [
    {
        nome: 'bicicletta1',
        peso: 14
    },
    {
        nome: 'bicicletta2',
        peso: 12
    },
    {
        nome: 'bicicletta3',
        peso: 10
    },
    {
        nome: 'bicicletta4',
        peso: 6
    }
];
//console.log('array biciclette:', biciclette);

//creo variabile di default a cui è associato il primo oggetto dell' array
//con ciclo for itero l' array per confrontare il peso della variabile di defaul con il peso di ogni oggetto dell' array

let biciclettaPiuLeggera = biciclette[0];
//console.log(biciclettaPiuLeggera);

for (let i = 0; i < biciclette.length; i++){
    let thisBicicletta = biciclette[i];
    //console.log(thisBicicletta);

    if(thisBicicletta.peso < biciclettaPiuLeggera.peso){
        biciclettaPiuLeggera = thisBicicletta
    }
    
}
console.log('bicicletta piu leggera:', biciclettaPiuLeggera);

//destrutturo oggetto biciclettaPiuLeggera

const {nome, peso} = biciclettaPiuLeggera;
//console.log(nome);
//console.log(peso);

//creo nuovo oggetto 
const biciclettaDaStampare = {
    nome : nome,
    peso : peso
};
//console.log(biciclettaDaStampare);

//stampo utilizzando template literal

const caratteristicheDaStampare = `
        <ul>
            <li> nome: ${nome}</li>
            <li> peso: ${peso}</li>
        </ul>
`;

document.getElementById('bicicletta').innerHTML= caratteristicheDaStampare;



//ES.2 
//Creare un array di oggetti di squadre di calcio. 
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti 
//stampiamo tutto in console.

const squadre = [
    {
        nome: 'Roma',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Milan',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Lazio',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Juventus',
        punti_fatti: 0,
        falli_subiti: 0
    }
];
console.log('array squadre:', squadre);

//creo array vuoto in cui pushare nuovi oggetti
//creo ciclo for per iterare gli oggetti nell' array

const arrayDaStampare = [];

for (let i = 0; i < squadre.length; i++){
    let thisSquadra = squadre[i];
    //console.log(thisSquadra);

    //con la funzione assegno numeri random a punti fatti
    thisSquadra.punti_fatti = getRandomInt(1, 100);

    //con la funzione assegno numeri random a falli subiti
    thisSquadra.falli_subiti = getRandomInt(1, 50);

    //console.log(thisSquadra);

    //destrutturo gli oggetti dell' array
    const {nome, falli_subiti} = thisSquadra;
    //console.log(nome);
    //console.log(falli_subiti);

    //creo nuovi oggetti con solo nome e falli subiti come proprietà
    const squadreDaStampare = {
        nome: nome,
        falli_subiti: falli_subiti
    };
    //console.log(squadreDaStampare);
    
    arrayDaStampare.push(squadreDaStampare);

}

console.log('array da stampare', arrayDaStampare);


//destrutturo arrayDaStampare

const [a, b, c, d] = arrayDaStampare;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//stampo con template literal
const caratteristicheSquadre = `
        <ul>
            <li> nome: ${a.nome}</li>
            <li> falli subiti: ${a.falli_subiti}</li>
        </ul>

        <ul>
            <li> nome: ${b.nome}</li>
            <li> falli subiti: ${b.falli_subiti}</li>
        </ul>

        <ul>
            <li> nome: ${c.nome}</li>
            <li> falli subiti: ${c.falli_subiti}</li>
        </ul>

        <ul>
            <li> nome: ${d.nome}</li>
            <li> falli subiti: ${d.falli_subiti}</li>
        </ul>

`;

document.getElementById('squadre').innerHTML = caratteristicheSquadre;



//funzione che genera numeri random

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}