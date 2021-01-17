import { Component } from 'react';
import mainSlide from '../images/g10.svg';
class MainSlide extends Component {
  render() {
    return (
      <div class="main-slide">
        <div class="main-collun-one">
          <h1 class="main-title">
            Construa o seu futuro sem se <b>preocupar com o presente</b></h1>
          <p class="main-text">O aprendev une o mercado de trabalho com os jovens reduzindo preocupações de quem estuda.</p>
          <a class="main-btn" href="#">Saiba Mais</a>
        </div>
        <div>
          <img src={mainSlide} alt="main-slide" />
        </div>
      </div>
    )
  }
}

export default MainSlide;