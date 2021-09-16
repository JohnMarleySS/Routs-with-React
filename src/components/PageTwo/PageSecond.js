import { render } from "@testing-library/react";
import { Link } from 'react-router-dom';
import React from "react";

class Second extends React.Component {
  render() {
    return (
      <div>
        <h1>Segunda Pagina</h1>
        <Link to='/'><button>Inicio</button></Link>
      </div>
    )
  }
}
export default Second;