
const tervitus1 = (nimi) => {
    return 'Tervitus, ' + nimi
}

console.log(tervitus1('Nipitiri'));

const tervitusX = (nimi) => {
    return `
    <div>
        <h1>Tere, ${nimi}</h1>
    </div>
    `
}

console.log(tervitus1('Nipitiri'));

const tervitus2 = nimi => 'Suur tere, ' + nimi

console.log(tervitus2('Klaabu'));


const tervitus3 = (nimi) => {
    console.log('Tere-tere, ' + nimi)
}

const nimed = [
    'Kati',
    'Mati',
    'Rebase Rein'
]

for (let i = 0; i < nimed.length; i++) {
    console.log(nimed[i]);
}

nimed.forEach(tervitus3)

const tervitused = nimed.map(nimi => 'Salut, ' + nimi) /*loob funtsioonis uue andmemassiivi*/

const htmlTervitused = nimed.map(tervitusX)

console.log(nimed) /*optional*/
console.log(tervitused)
console.log(htmlTervitused)