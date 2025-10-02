const Inicio = () => {
  return (
    <>
      {/* Hero Carousel/Slider */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-slide bg-primary d-flex align-items-center justify-content-center" style={{height: '500px'}}>
              <div className="text-center text-white">
                <h1 className="display-3 fw-bold">Inteligencia Artificial</h1>
                <p className="lead fs-4">Descubre el futuro de la tecnología</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-slide bg-info d-flex align-items-center justify-content-center" style={{height: '500px'}}>
              <div className="text-center text-white">
                <h1 className="display-3 fw-bold">Aprende sobre IA</h1>
                <p className="lead fs-4">Historia, aplicaciones y más</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-slide bg-dark d-flex align-items-center justify-content-center" style={{height: '500px'}}>
              <div className="text-center text-white">
                <h1 className="display-3 fw-bold">El futuro es ahora</h1>
                <p className="lead fs-4">Únete a la revolución tecnológica</p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Sección de Bienvenida */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-4">Bienvenido a IA Informativa</h2>
            <p className="lead text-muted">
              Aquí encontrarás información completa sobre la Inteligencia Artificial, 
              su evolución histórica y sus aplicaciones en el mundo moderno.
            </p>
            <p className="text-muted">
              Explora nuestras secciones para aprender más sobre cómo la IA está 
              transformando industrias, mejorando vidas y creando nuevas oportunidades.
            </p>
          </div>
          <div className="col-lg-6">
            <img 
              src="https://via.placeholder.com/600x400/007bff/ffffff?text=IA+Imagen" 
              alt="IA Ilustración" 
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Cards de características */}
      <div className="bg-light py-5">
        <div className="container">
          <h3 className="text-center mb-5 fw-bold">¿Qué encontrarás aquí?</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <span className="display-4">📚</span>
                  </div>
                  <h5 className="card-title fw-bold">Historia</h5>
                  <p className="card-text text-muted">
                    Conoce los orígenes y evolución de la Inteligencia Artificial desde sus inicios.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <span className="display-4">💡</span>
                  </div>
                  <h5 className="card-title fw-bold">Aplicaciones</h5>
                  <p className="card-text text-muted">
                    Descubre las múltiples aplicaciones de la IA en diferentes campos.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <span className="display-4">🚀</span>
                  </div>
                  <h5 className="card-title fw-bold">Futuro</h5>
                  <p className="card-text text-muted">
                    Explora las tendencias y el futuro de la Inteligencia Artificial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;