let totaleGatti = 85;
let gattiInFila = 10;

let numFile = Math.floor(totaleGatti / gattiInFila);

let gattiRestanti = totaleGatti % gattiInFila;

let gattiMancanti = gattiInFila - gattiRestanti;

console.log(`Ci sono ${numFile} file di gatti e ne mancano ${gattiMancanti} per una nuova fila, con un avanzo di ${gattiRestanti}.`);





