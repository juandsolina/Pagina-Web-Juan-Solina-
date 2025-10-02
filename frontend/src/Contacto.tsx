import { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mensaje enviado:', formData);
    alert('¡Mensaje enviado correctamente! Te responderemos pronto.');
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
  };

  return (
    <div className="bg-light py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">Contáctanos</h1>
          <p className="lead text-muted">
            ¿Tienes preguntas? Estamos aquí para ayudarte
          </p>
        </div>

        <div className="row g-4">
          {/* Formulario */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <h3 className="fw-bold mb-4">Envíanos un mensaje</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="nombre" className="form-label fw-semibold">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="nombre"
                        name="nombre"
                        placeholder="Juan Pérez"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label fw-semibold">
                        Email *
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        placeholder="juan@ejemplo.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="asunto" className="form-label fw-semibold">
                        Asunto *
                      </label>
                      <select
                        className="form-select form-select-lg"
                        id="asunto"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecciona un asunto</option>
                        <option value="consulta">Consulta General</option>
                        <option value="soporte">Soporte Técnico</option>
                        <option value="sugerencia">Sugerencia</option>
                        <option value="colaboracion">Colaboración</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="mensaje" className="form-label fw-semibold">
                        Mensaje *
                      </label>
                      <textarea
                        className="form-control form-control-lg"
                        id="mensaje"
                        name="mensaje"
                        rows={5}
                        placeholder="Escribe tu mensaje aquí..."
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-lg w-100 fw-semibold">
                        Enviar Mensaje
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4">Información de Contacto</h4>
                <div className="d-flex align-items-start mb-3">
                  <div className="me-3 fs-4">📧</div>
                  <div>
                    <h6 className="fw-semibold mb-1">Email</h6>
                    <p className="text-muted mb-0">info@iainformativa.com</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <div className="me-3 fs-4">📱</div>
                  <div>
                    <h6 className="fw-semibold mb-1">Teléfono</h6>
                    <p className="text-muted mb-0">+57 123 456 7890</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="me-3 fs-4">📍</div>
                  <div>
                    <h6 className="fw-semibold mb-1">Dirección</h6>
                    <p className="text-muted mb-0">Bogotá, Colombia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm bg-primary text-white">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">Horario de Atención</h5>
                <p className="mb-2">
                  <strong>Lunes a Viernes:</strong> 9:00 AM - 6:00 PM
                </p>
                <p className="mb-0">
                  <strong>Sábados:</strong> 10:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;