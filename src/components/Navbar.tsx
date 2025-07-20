import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50 bg-secondary shadow-lg">
      {/* Contenedor principal */}
      <div className="navbar-main">
        {/* Sección superior (negra + verde) */}
        <div className="navbar-top">
          {/* Sección izquierda negra con forma diagonal */}
          <div className="navbar-left">
            <div className="navbar-left-diagonal">
              <Image className="navbar-logo-img" src="/folkode-oscuro-no-bg.png" alt="Folkode Logo" width={180} height={180} />
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