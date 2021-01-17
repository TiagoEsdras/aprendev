import { Component } from 'react';
import estudante from '../images/Group 8.svg';
import empresa from '../images/Group 6.svg';
import ong from '../images/g11.svg';

class Profile extends Component {
  render() {
    const { handlerClickONG, handlerClickCompany, handlerClickStudent } = this.props;
    return (
      <div class="profile-section">
        <div>
          <h1 class="profile-title">Escolha seu perfil</h1>
        </div>
        <div class="profile-cards">
          <div class="card">
            <div>
              <h2 class="card-profile-title studant">Estudante</h2>
            </div>
            <div class="img-div">
              <img src={estudante} alt="estudante" />
            </div>
            <div>
              <p class="profile-text">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
              <div>
                <button class="profile-btn" onClick={() => handlerClickStudent()}>Inscreva-se agora</button>
              </div>
            </div>
          </div>

          <div class="card">
            <div>
              <h2 class="card-profile-title">ONG</h2>
            </div>
            <div class="img-div">
              <img src={ong} alt="ong" />
            </div>
            <div>
              <p class="profile-text">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
              <div>
                <button class="profile-btn" onClick={() => handlerClickONG()}>Seja Parceira</button>
              </div>
            </div>
          </div>

          <div class="card">
            <div>
              <h2 class="card-profile-title">Empresa</h2>
            </div>
            <div class="img-div">
              <img src={empresa} alt="empresa" />
            </div>
            <div>
              <p class="profile-text">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
              <div>
                <button class="profile-btn" onClick={() => handlerClickCompany()}>Seja Parceira</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Profile;
