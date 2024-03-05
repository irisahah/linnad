import '/linnad.css';
import Linn from './Linn';
import londonPilt from '';

function App() {
  return (
    <div className="container">
      <h1>Minu lemmiklinnad</h1>
      <Linn name="Pariis" riik="Prantsusmaa" />
      <Linn name="London" riik="INglismaa" />
      <Linn name="Elva" riik="Eesti" />
    </div>
  )
}

export default App;
