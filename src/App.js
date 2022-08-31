import './App.css';
import Header from './componentes/header';
import Navegaton from './componentes/navegation';
import SubContent from './componentes/subContents';
import Advertesiment from './componentes/advertesiment';


function App() {
  return (
    <div className='main'>
      <Header />
      <Navegaton />
      <div className='section'>
         <SubContent />
         <SubContent />
         <SubContent />
         <Advertesiment />
      </div>

    </div>
  );
}

export default App;
