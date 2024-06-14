// Importar las librerías necesarias
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Importar el archivo CSS

// Definir el componente de registro
const RegisterForm = () => {
  return (
    <div className="container">
      <h2>Registro</h2>
      <form>
        <div>
          <label htmlFor="firstName">Nombre</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Apellido</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="phone">Teléfono</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

// Crear la raíz y renderizar el componente de registro
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RegisterForm />);
