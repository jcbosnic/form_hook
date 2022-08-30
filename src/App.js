import './App.css';
import PersonCard from './componentes/Person-card';

function App(props) {
  return (
    <div >
      <PersonCard name={"Juan Carlos"} age={40} hair={"negro"}  />
      <PersonCard name={"Felipe"} age={32} hair={"cafe"}  />
      <PersonCard name={"Rodrigo"} age={26} hair={"rubio"}  />
      <PersonCard name={"Daisy"} age={39} hair={"rojo"}  />
    </div>
  );
}

export default App;
