import { Component } from 'react';

class Profile extends Component {
  render() {
    const { handlerClickONG, handlerClickCompany, handlerClickStudent} = this.props;
    return (
      <div>
        <div>
          <h1>Escolha seu perfil</h1>
        </div>
        <div>
          <div>
            <div>
              <h2>Estudante</h2>
            </div>
            <div>
              imagem
            </div>
            <div>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
              <div>
                <button onClick={ () => handlerClickStudent() }>Inscreva-se agora</button>
              </div>
            </div>
          </div>
          
          <div>
            <div>
              <h2>ONG</h2>
            </div>
            <div>
              imagem
            </div>
            <div>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
              <div>
                <button onClick={ () => handlerClickONG() }>Seja Parceira</button>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h2>Empresa</h2>
            </div>
            <div>
              imagem
            </div>
            <div>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
              <div>
                <button onClick={ () => handlerClickCompany() }>Seja Parceira</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Profile;
