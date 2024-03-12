import './linnad.css';
import Linn from './Linn';
import parisPilt from './pildid/paris.jpg';
import londonPilt from './pildid/london.jpg';
import berlinPilt from './pildid/berlin.jpg'




function App() {
  return (
    <div className="container">
      <h1>Minu lemmiklinnad</h1>
      <Linn name="Pariis" riik="Prantsusmaa" pilt={parisPilt} />
      <Linn name="London" riik="Inglismaa" pilt={londonPilt} />
      <Linn name="Berliin" riik="Saksamaa" pilt={berlinPilt} />
    </div>
  )
}


export default App;
