import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <a href="#default" class="logo">CompanyLogo</a>
        <nav className="header-right">
          <a href="#home">Contato</a>
          <a class="active" href="#contact">Registre-se</a>
          <a class="active" href="#about">Login</a>
        </nav>
      </header>
    )
  }
}

export default Header;
