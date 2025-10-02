const Historia = () => {
  const eventos = [
    {
      year: "1950",
      title: "Test de Turing",
      description: "Alan Turing propone el famoso test para determinar si una máquina puede exhibir comportamiento inteligente indistinguible del de un humano.",
      icon: "📝"
    },
    {
      year: "1956",
      title: "Conferencia de Dartmouth",
      description: "Nace oficialmente el término 'Inteligencia Artificial' en esta histórica conferencia.",
      icon: "🎓"
    },
    {
      year: "1997",
      title: "Deep Blue vs Kasparov",
      description: "La supercomputadora de IBM derrota al campeón mundial de ajedrez, marcando un hito en la IA.",
      icon: "♟️"
    },
    {
      year: "2011",
      title: "Watson en Jeopardy",
      description: "IBM Watson gana el concurso de televisión Jeopardy!, demostrando capacidades avanzadas de procesamiento de lenguaje natural.",
      icon: "🏆"
    },
    {
      year: "2016",
      title: "AlphaGo",
      description: "AlphaGo de Google DeepMind derrota al campeón mundial de Go, un juego considerado mucho más complejo que el ajedrez.",
      icon: "🎮"
    },
    {
      year: "2022+",
      title: "Era de la IA Generativa",
      description: "Explosión de modelos como GPT, DALL-E y otros que pueden generar texto, imágenes y más.",
      icon: "🚀"
    }
  ];

  return (
    <div className="bg-light py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">Historia de la IA</h1>
          <p className="lead text-muted">
            Un viaje a través del tiempo explorando los momentos clave en la evolución de la Inteligencia Artificial
          </p>
        </div>

        {/* Intro */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <p className="text-muted mb-0">
                  La Inteligencia Artificial tiene sus orígenes en la década de 1950, cuando los científicos 
                  comenzaron a explorar si las máquinas podían "pensar". Desde entonces, ha evolucionado 
                  dramáticamente, pasando de simples programas de ajedrez a sistemas que pueden conversar, 
                  crear arte y hasta conducir vehículos autónomos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="row">
          <div className="col-lg-10 mx-auto">
            {eventos.map((evento, index) => (
              <div key={index} className="card mb-4 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="col-md-2 text-center mb-3 mb-md-0">
                      <div className="display-1">{evento.icon}</div>
                    </div>
                    <div className="col-md-10">
                      <div className="d-flex align-items-center mb-2">
                        <span className="badge bg-primary px-3 py-2 me-3 fs-6">
                          {evento.year}
                        </span>
                        <h4 className="fw-bold mb-0">{evento.title}</h4>
                      </div>
                      <p className="text-muted mb-0">{evento.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historia;