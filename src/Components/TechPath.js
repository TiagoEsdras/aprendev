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
          <div class="fases">
            <div>
              <h2 class="firts-step">Primeira fase</h2>
            </div>
            <div>
              <p class="text-etapas">
                Na primeira etapa do programa, o estudante será inserido ao contexto de informática básica.
              </p>
            </div>
          </div>
          <div class="fases">
            <div>
              <h2 class="second-step">Segunda fase</h2>
            </div>
            <div>
              <p class="text-etapas">
                Já segunda fase, será abordado o início de lógica de programação preparando o aluno para o mercado de desenvolvimento.
              </p>
            </div>
          </div>
          <div class="fases">
            <div>
              <h2 class="third-step">Terceira fase</h2>
            </div>
            <div>
              <p class="text-etapas">
                Na terceira fase de ensino, o jovem começará estudar frameworks e a realização de alguns projetos em grupo.
              </p>
            </div>
          </div>
          <div class="fases">
            <div>
              <h2 class="fourth-step">Quarta fase</h2>
            </div>
            <div>
              <p class="text-etapas">
                Na quarta e última etapa, será trabalhado soft skills de maneira que o jovem saia pronto para o mercado de trabalho.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TechPath;
