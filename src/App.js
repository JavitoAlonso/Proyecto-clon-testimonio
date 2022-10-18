import './App.css';
import Testimonio from "./components/testimonio"

function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1>Esto es lo que dicen nuestros alumnos</h1>
      <Testimonio 
      imagen="testimonio1"
      nombre="Emanuel Whatson"
      cargo="Escritor"
          descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"/>
      <Testimonio 
      imagen="testimonio2"
      nombre="Pedro Shawn"
      cargo="Programador"
          descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"/>
      <Testimonio 
      imagen="testimonio3"
      nombre="Artemio Jhon"
      cargo="Pintor"
          descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"/>
      </div>
    </div>
  );
}

export default App;
