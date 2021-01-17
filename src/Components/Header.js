import { Component } from 'react';
import logoImage from '../images/logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logoImage} alt="logo" class="logo" />
        <nav className="header-right">
          <a href="#home">O programa</a>
          <a className="register" href="#">Registre-se</a>
          <a className="login" href="#">Login</a>
        </nav>
      </header>
    )
  }
}

export default Header;
