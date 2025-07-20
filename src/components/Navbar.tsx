import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Contenedor principal */}
      <div className="navbar-main">
        {/* Sección superior (negra + verde) */}
        <div className="navbar-top">
          {/* Sección izquierda negra con forma diagonal */}
          <div className="navbar-left">
            <div className="navbar-left-diagonal">
              <img className="navbar-logo-img" src="./folkode-oscuro.png" alt="Folkode Logo" />

            </div>
          </div>

          {/* Sección derecha verde más claro */}
          <div className="navbar-right">
            {['Inicio', 'Contáctanos', 'Sobre Nosotros', 'Servicios'].map((item) => (
              <span 
                key={item}
                className="text-nav-link" 
                style={{ color: 'var(--color-text-inverse)', transition: 'color 0.2s ease' }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Sección inferior verde SIN borde */}
        <div className="navbar-bottom" />
      </div>
    </nav>
  );
};

export default Navbar;