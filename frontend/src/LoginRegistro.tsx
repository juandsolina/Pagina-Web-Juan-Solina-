import { useState } from 'react';

const API_URL = 'http://localhost:5000';

const LoginRegistro = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Limpiar error al escribir
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        // LOGIN - Usar la API del backend Express
        const response = await fetch(`${API_URL}/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: formData.email,
            password: formData.password
          }),
        });

        const data = await response.json();

        if (response.ok) {
          alert('¡Login exitoso! Bienvenido ' + formData.email);
          // Guardar el token si lo necesitas
          localStorage.setItem('token', data.token);
          console.log('Token guardado:', data.token);
        } else {
          setError(data.error || 'Error al iniciar sesión');
        }
      } else {
        // REGISTRO
        if (formData.password !== formData.confirmPassword) {
          setError('Las contraseñas no coinciden');
          setLoading(false);
          return;
        }

        // Crear nuevo usuario usando la API del backend
        const response = await fetch(`${API_URL}/api/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: formData.email,
            password: formData.password
          }),
        });

        const data = await response.json();

        if (response.ok) {
          alert('¡Registro exitoso! Ya puedes iniciar sesión');
          console.log('Usuario creado:', data);
          setIsLogin(true); // Cambiar a modo login
          setFormData({ email: '', password: '', confirmPassword: '' });
        } else {
          setError(data.error || 'Error al registrar usuario');
        }
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Error de conexión. Verifica que el backend esté corriendo en http://localhost:5000');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div className="mb-3">
                    <span className="display-4">🤖</span>
                  </div>
                  <h2 className="fw-bold">
                    {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
                  </h2>
                  <p className="text-muted">
                    {isLogin 
                      ? 'Accede a tu cuenta' 
                      : 'Crea tu cuenta nueva'}
                  </p>
                </div>

                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      name="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-semibold">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="password"
                      name="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  {!isLogin && (
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label fw-semibold">
                        Confirmar Contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        disabled={loading}
                      />
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg w-100 mb-3 fw-semibold"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        {isLogin ? 'Iniciando sesión...' : 'Registrando...'}
                      </>
                    ) : (
                      isLogin ? 'Iniciar Sesión' : 'Registrarse'
                    )}
                  </button>

                  <div className="text-center">
                    <p className="mb-0 text-muted">
                      {isLogin ? '¿No tienes cuenta? ' : '¿Ya tienes cuenta? '}
                      <button
                        type="button"
                        className="btn btn-link p-0 text-decoration-none fw-semibold"
                        onClick={() => {
                          setIsLogin(!isLogin);
                          setError('');
                          setFormData({ email: '', password: '', confirmPassword: '' });
                        }}
                        disabled={loading}
                      >
                        {isLogin ? 'Regístrate aquí' : 'Inicia Sesión'}
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegistro;