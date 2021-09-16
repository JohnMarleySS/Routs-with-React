import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
      <h1> 3 Rotas simples</h1>
      <nav>
        <ul>
          <li>
            <Link to="/primeirapagina">Pagina 1</Link>
          </li>
          <li>
            <Link to="/segundapagina">Pagina 2</Link>
          </li>
          <li>
            <Link to="/terceirapagina">Pagina 3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;