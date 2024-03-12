import './linnad.css';
import Linn from './Linn';
import parisPilt from './pildid/paris.jpg';
import londonPilt from './pildid/london.jpg';
import berlinPilt from './pildid/berlin.jpg';
import LinnadeLoetelu from './LinnadeLoetelu';

const pariis = {
  nimi: "Pariis",
  riik: "Prantsusmaa",
  pilt: parisPilt
}

const linnad = [
  pariis,
  {nimi: 'London', riik: "Inglismaa", pilt: londonPilt},
  {nimi: 'Berliin', riik: "Saksamaa", pilt: berlinPilt}
]

/* Esialgne App, kus iga linn algväärtustatakse eraldi
function App() {
  return (
    <div className="container">
      <h1>Minu lemmiklinnad</h1>
      <Linn name={pariis.nimi} riik={pariis.riik} pilt={pariis.pilt} />
      <Linn name="London" riik="Inglismaa" pilt={londonPilt} />
      <Linn name="Berliin" riik="Saksamaa" pilt={berlinPilt} />
    </div>
  )
}
*/

function App() {
  return (
    <div className="container">
      <LinnadeLoetelu linnad={linnad} />
      <div>
      <div>Linnad Euroopas</div>
      {linnad.map((linn)=>{
        return (
          <Linn name={linn.nimi} riik={linn.riik} pilt={linn.pilt} />
        )
      })}
      </div>
 
    </div>
  )
}


export default App;
