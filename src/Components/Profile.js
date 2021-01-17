import { Component } from 'react';

class Profile extends Component {
  render() {
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
                <button>Inscreva-se agora</button>
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
                <button>Seja Parceira</button>
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
                <button>Seja Parceira</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Profile;
