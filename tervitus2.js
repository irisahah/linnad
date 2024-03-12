//objekt = sõber

const sober = {
    nimi: 'Nipitiri',
    aardess: 'Metsa 5',
}

console.log(sober.nimi) // Nipitiri

const {nimi} = sober

console.log(nimi) // Nipitiri

const tervitus = [
    'Tige kala',
    (nimi) => 'Tere, ' + nimi
]

console.log(tervitus[1]('Karu Kati'));

const [soberNimi, looTervitus] = tervitus;

console.log(looTervitus(soberNimi));

