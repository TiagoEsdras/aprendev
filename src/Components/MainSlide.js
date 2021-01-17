import { Component } from 'react';
import mainSlide from '../images/g10.svg';
class MainSlide extends Component {
  render() {
    return (
      <div class="main-slide">
        <div class="main-collun-one">
          <h1 class="main-title">Lorem ipsum dolor sit <b>amet, consetetur</b> sadipscing elitr, sed.</h1>
          <p class="main-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
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