import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
    return ( <
        div className = "App" >
        <
        div className = 'contenedor-principal' >
        <
        h1 > Titulo principal de la app < /h1> <
        Testimonio nombre = 'si señor'
        pais = 'colombia'
        imagen = '1'
        cargo = 'cazador'
        empresa = 'aaa' / >

        <
        Testimonio nombre = 'max'
        pais = 'colombia'
        imagen = '2'
        cargo = 'cazador'
        empresa = 'aaa' / >

        <
        Testimonio nombre = 'mini'
        pais = 'colombia'
        imagen = '3'
        cargo = 'cazador'
        empresa = 'aaa' / >

        <
        /div>  < /
        div >
    );
}

export default App;