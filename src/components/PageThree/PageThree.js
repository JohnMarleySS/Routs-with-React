import { Link } from 'react-router-dom';
import React from "react";

class Three extends React.Component {
  render() {
    return (
      <div>
        <h1>Terceira Pagina</h1>
        <Link to='/'><button>Inicio</button></Link>
      </div>
    )
  }
}
export default Three;