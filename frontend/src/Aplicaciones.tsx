const Aplicaciones = () => {
  const aplicaciones = [
    { 
      titulo: "Procesamiento de Lenguaje Natural", 
      descripcion: "Chatbots inteligentes, traducción automática, análisis de sentimientos en redes sociales y asistentes virtuales.",
      icon: "💬",
      ejemplos: ["ChatGPT", "Google Translate", "Alexa"]
    },
    { 
      titulo: "Visión por Computadora", 
      descripcion: "Reconocimiento facial, vehículos autónomos, diagnóstico médico por imágenes y sistemas de seguridad.",
      icon: "👁️",
      ejemplos: ["Face ID", "Tesla Autopilot", "Rayos X IA"]
    },
    { 
      titulo: "Machine Learning", 
      descripcion: "Sistemas de recomendación, detección de fraudes, predicción de tendencias y personalización de contenido.",
      icon: "🤖",
      ejemplos: ["Netflix", "Amazon", "Spotify"]
    },
    { 
      titulo: "Robótica", 
      descripcion: "Robots industriales, drones autónomos, asistentes robóticos y automatización de procesos.",
      icon: "🦾",
      ejemplos: ["Boston Dynamics", "Roomba", "DJI"]
    },
    { 
      titulo: "Salud y Medicina", 
      descripcion: "Diagnóstico asistido, descubrimiento de medicamentos, cirugía robótica y monitoreo de pacientes.",
      icon: "⚕️",
      ejemplos: ["IBM Watson Health", "DeepMind Health"]
    },
    { 
      titulo: "Finanzas", 
      descripcion: "Trading algorítmico, análisis de riesgos, detección de fraudes y asesoramiento financiero automatizado.",
      icon: "💰",
      ejemplos: ["Robo-advisors", "Sistemas antifraude"]
    }
  ];

  return (
    <div className="py-5 px-4">
      <div className="container-fluid">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">Aplicaciones de la IA</h1>
          <p className="lead text-muted">
            La IA se aplica en múltiples campos, transformando industrias y mejorando vidas
          </p>
        </div>

        {/* Intro */}
        <div className="row mb-5">
          <div className="col-lg-10 col-xl-8 mx-auto">
            <div className="alert alert-info border-0" role="alert">
              <h5 className="alert-heading fw-bold">🌟 Impacto Global</h5>
              <p className="mb-0">
                La Inteligencia Artificial está revolucionando prácticamente todos los aspectos 
                de nuestra vida diaria, desde cómo trabajamos hasta cómo nos entretenemos y cuidamos 
                nuestra salud.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="row g-4 px-lg-5">
          {aplicaciones.map((app, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm hover-card">
                <div className="card-body p-4">
                  <div className="text-center mb-3">
                    <span className="display-3">{app.icon}</span>
                  </div>
                  <h5 className="card-title fw-bold text-center mb-3">
                    {app.titulo}
                  </h5>
                  <p className="card-text text-muted mb-3">
                    {app.descripcion}
                  </p>
                  <div className="border-top pt-3">
                    <p className="small text-muted mb-2 fw-semibold">Ejemplos:</p>
                    <div className="d-flex flex-wrap gap-2">
                      {app.ejemplos.map((ejemplo, idx) => (
                        <span key={idx} className="badge bg-light text-dark border">
                          {ejemplo}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="row mt-5 px-lg-5">
          <div className="col-lg-10 col-xl-8 mx-auto">
            <div className="card bg-primary text-white border-0 shadow">
              <div className="card-body p-5 text-center">
                <h3 className="fw-bold mb-3">¿Quieres aprender más?</h3>
                <p className="mb-4">
                  Explora nuestra sección de historia para conocer cómo llegamos hasta aquí
                </p>
                <a href="/historia" className="btn btn-light btn-lg">
                  Ver Historia de la IA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aplicaciones;