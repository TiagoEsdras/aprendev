import { Component } from 'react';
import techpath from '../images/Group 9.svg';

class TechPath extends Component {
  render() {
    return (
      <div class="tech-path-section">
        <h1 class="title-section">
          1 ano de programa
        </h1>
        <div class="separator" />
        <div>
          <img src={techpath} alt="trilha de sucesso" />
        </div>
        <div class="tech-path-fases">
          <div class="title-fases">
            <div>
              <h2 class="firts-step">Primeira fase</h2>
            </div>
            <div>
              <p>
                vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci
              </p>
            </div>
          </div>
          <div class="title-fases">
            <div>
              <h2 class="second-step">Segunda fase</h2>
            </div>
            <div>
              <p>
                vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci
              </p>
            </div>
          </div>
          <div class="title-fases">
            <div>
              <h2 class="third-step">Terceira fase</h2>
            </div>
            <div>
              <p>
                vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci
              </p>
            </div>
          </div>
          <div class="title-fases">
            <div>
              <h2 class="fourth-step">Quarta fase</h2>
            </div>
            <div>
              <p>
                vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TechPath;
