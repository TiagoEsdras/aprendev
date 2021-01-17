import { Component } from 'react';
import logoDark from '../images/dark_logo.svg';

class Footer extends Component {
  render() {
    return (
      <footer class="footer-section">
        <div>
          <img src={logoDark} alt="logo aprendev" class="logo-footer" />
        </div>
        <div class="footer-text">
          Desenvolvido por: Christopher Paladino, Lucas Nonato, Sttefanie Palatino e Tiago Esdras
        </div>
      </footer>
    )
  }
}

export default Footer;
