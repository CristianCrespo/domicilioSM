import React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return(
      <div className="row">
            <div className="col py-5 font-family">
                <h2>Domicilios SM</h2>
                  <ul>
                      <li><Link class="p-2 text-dark" to="/domicilios">Domicilios</Link></li>
                      <li><Link class="p-2 text-dark" to="/mensajeros">Mensajeros</Link></li>
                      <li><Link to="/micuenta">Mi Cuenta</Link></li>
                  </ul>
           </div>
        </div>
    )
  }  
}
export default Header;