import { Component } from 'react';

class FormStudent extends Component {
  render() {
    return (
      <div class="container">
        <div>
          <h1 class="title-form">Cadastre-se</h1>
        </div>
        <form class="form-contact">
          <input
            type="text"
            class="form-contact-input"
            name="nome"
            placeholder="Nome completo"
            required
          />
          <input
            type="tel"
            class="form-contact-input"
            name="tel"
            placeholder="Telefone"
          />
          <input
            type="email"
            class="form-contact-input"
            name="email"
            placeholder="Email"
            required
          />
          <input
            type="number"
            class="form-contact-input"
            name="idade"
            placeholder="Idade"
            required
          />
          <input
            type="text"
            class="form-contact-input"
            name="cpf"
            placeholder="CPF"
            required
          /> 
          <select
            name="escola"
            id="escola"
            class="form-contact-input"
          >
            <option hidden>Escola</option>
            <option value="a">Escola A</option>
            <option value="b">Escola B</option>
            <option value="c">Escola C</option>
          </select>
          <select
            name="raca"
            id="raca"
            class="form-contact-input"
          >
            <option hidden>Raça</option>
            <option value="negro">Negro</option>
            <option value="pardo">Pardo</option>
            <option value="indigeno">Indígeno</option>
            <option value="outros">Outros</option>
          </select>
          <input
            type="number"
            class="form-contact-input"
            name="renda"
            placeholder="Renda familiar R$ "
            required
          />
          <button type="submit" class="form-contact-button">Enviar</button>
        </form>
      </div>
    )
  }
}

export default FormStudent;
