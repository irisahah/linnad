import './linnad.css';
import Linn from './Linn';
import parisPilt from './pildid/paris.jpg';
import londonPilt from './pildid/london.jpg';
import berlinPilt from './pildid/berlin.jpg';
import LinnadeLoetelu from './LinnadeLoetelu';
import { useState } from 'react'


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

const lisaLinn = () => {
  console.log('linna lisamine')
}

function App() {
  const [kylastusiPariisis, setKylastusiPariisis] = useState(0);
  const [kylastusiLondonis, setKylastusiLondonis] = useState(0);
  const [kylastusiBerliinis, setKylastusiBerliinis] = useState(0);

  const linnad = [
    { nimi: 'Pariis', riik: "Prantsusmaa", pilt: parisPilt, kylastusi: kylastusiPariisis, setKylastusi: setKylastusiPariisis },
    { nimi: 'London', riik: "Inglismaa", pilt: londonPilt, kylastusi: kylastusiLondonis, setKylastusi: setKylastusiLondonis },
    { nimi: 'Berliin', riik: "Saksamaa", pilt: berlinPilt, kylastusi: kylastusiBerliinis, setKylastusi: setKylastusiBerliinis }
  ];

  const [aktiivneLinn, setAktiivneLinn] = useState(2);


  return (
    <div className="container">
      <LinnadeLoetelu linnad={linnad}
        setAktiivneLinn={setAktiivneLinn}
      />
      <div>
        <div>Linnad Euroopas</div>
        <button onClick={lisaLinn}>Lisa linn</button>
        {/* linnad.map((linn) => {
          return (
            <Linn name={linn.nimi} riik={linn.riik} pilt={linn.pilt} />
          )
        }) */}
        <Linn
          name={linnad[aktiivneLinn].nimi}
          riik={linnad[aktiivneLinn].riik}
          pilt={linnad[aktiivneLinn].pilt}
          kylastusi={linnad[aktiivneLinn].kylastusi}
          setKylastusi={linnad[aktiivneLinn].setKylastusi}
        />
      </div>

    </div>
  )
}


export default App;
