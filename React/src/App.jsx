import { BrowserRouter } from "react-router-dom";
import Menu from "./components/menu/Menu.jsx";
import Footer from "./components/footer/Footer.jsx";
import Rutas from "./routes/Rutas.jsx";


// --- Práctica 2.03 (reorganizada en /components/useRef) ---
// import PeliculasPage from "./pages/PeliculasPage.jsx";

/* import Listado from "./components/useState/Practica3-08/Listado.jsx";
import ContadorLimite from "./components/useState/Practica3-08/ContadorLimite.jsx";
import ContadorLikes from "./components/useState/Practica3-08/ContadorLikes.jsx";
import Matricula from "./components/useState/Practica3-09/Matricula.jsx"; */

function App() {
  return (
    <>
      {/* Ejercicios de la Práctica 2.03 */}
      {/* <PeliculasPage /> */}

      {/* Ejercicios de la Práctica 3.08 / 3.09 (activa los que quieras) */}
      {/* <Listado /> */}
      {/* <ContadorLimite /> */}
      {/* <ContadorLikes /> */}
      {/* <Matricula /> */}

      <BrowserRouter>
        <div className="layout">
        {/* Cabecera y Menú */}
        <header className="cabecera">
          <Menu />
        </header>

        {/* Contenido */}
        <main className="contenidoPrincipal">
          <Rutas />
        </main>

        {/* Pie */}
        <footer className="pie">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
