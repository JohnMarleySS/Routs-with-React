import { Link } from 'react-router-dom';
import React from "react";

class First extends React.Component {
  render() {
    return (
      <div>
        <h1>Primeira Pagina</h1>
        <Link to='/'><button>Inicio</button></Link>
      </div>
    )
  }
}
export default First;