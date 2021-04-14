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
console.log(biciclettaPiuLeggera);

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