import './App.css';
import ListadeMetas from './components/ListadeMetas';
 
function App() {
  return (
    <div className='aplicacion-Metas'>
      <div className='Metas-lista-principal'>
        <h1>Mis metas</h1>
        <br/>
           <ListadeMetas/>
         </div>
    </div>
  );
}

export default App;