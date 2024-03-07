import '/linnad.css';
import Linn from './Linn';
import londonPilt from './pildid/london.jpg';
import pariisPilt from './pildid/pariis.jpg';

const linnad = [
  pariis,
  {nimi: 'London, riik: 'Inglismaa', pilt: londonPilt};

]


function App() {
  return (
    <div className="container">
      <h1>Minu lemmiklinnad</h1>
      <Linn name="Pariis" riik="Prantsusmaa" />
      <Linn name="London" riik="Inglismaa" />
      <Linn name="Elva" riik="Eesti" />
    </div>
  )
}


export default App;
