import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './Inicio';
import Historia from './Historia';
import Aplicaciones from './Aplicaciones';
import LoginRegistro from './LoginRegistro';
import Contacto from './Contacto';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        {/* Navbar mejorado */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
          <div className="container">
            <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
              <span className="me-2 fs-4">🤖</span>
              <span className="fs-5">IA Informativa</span>
            </Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/historia">
                    Historia
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/aplicaciones">
                    Aplicaciones
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/contacto">
                    Contacto
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-info text-white ms-2" to="/login">
                    Login/Registro
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Contenido principal */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/aplicaciones" element={<Aplicaciones />} />
            <Route path="/login" element={<LoginRegistro />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        {/* Footer mejorado */}
        <footer className="bg-dark text-white py-4 mt-auto">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-3 mb-md-0">
                <h5 className="fw-bold mb-3">🤖 IA Informativa</h5>
                <p className="text-white-50">
                  Tu portal de información sobre Inteligencia Artificial
                </p>
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <h5 className="fw-bold mb-3">Enlaces</h5>
                <ul className="list-unstyled">
                  <li><Link to="/" className="text-white-50 text-decoration-none">Inicio</Link></li>
                  <li><Link to="/historia" className="text-white-50 text-decoration-none">Historia</Link></li>
                  <li><Link to="/aplicaciones" className="text-white-50 text-decoration-none">Aplicaciones</Link></li>
                  <li><Link to="/contacto" className="text-white-50 text-decoration-none">Contacto</Link></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5 className="fw-bold mb-3">Contacto</h5>
                <p className="text-white-50 mb-1">
                  📧 info@iainformativa.com
                </p>
                <p className="text-white-50 mb-1">
                  📱 +57 123 456 7890
                </p>
                <p className="text-white-50">
                  📍 Bogotá, Colombia
                </p>
              </div>
            </div>
            <hr className="border-secondary my-3" />
            <div className="text-center text-white-50">
              <p className="mb-0">© 2025 IA Informativa. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;