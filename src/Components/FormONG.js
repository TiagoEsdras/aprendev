import { Component } from 'react';

class FormONG extends Component {
  render() {
    return (
      <div class="container">
        <div>
          <h1 class="title-form">Cadastre sua ONG</h1>
        </div>
        <form class="form-contact">
          <input
            type="text"
            class="form-contact-input"
            name="nome"
            placeholder="Nome da instituição"
            required
          />
          <input
            type="text"
            class="form-contact-input"
            name="cnpj"
            placeholder="CNPJ"
            required
          />
          <input
            type="email"
            class="form-contact-input"
            name="email"
            placeholder="Email"
            required
          />
          <input
            type="tel"
            class="form-contact-input"
            name="tel"
            placeholder="Telefone"
          />
          <select
            name="finalidade"
            id="finalidade"
            class="form-contact-input"
          >
            <option hidden>Finalidade</option>
            <option value="acessibilidade">Acessibilidade</option>
            <option value="assistencia-social">Assistência Social</option>
            <option value="cultura-e-esporte">Cultura e Esporte</option>
            <option value="desenvolvimento-local">Desenvolvimento Local</option>
            <option value="direitos-humanos">Direitos Humanos</option>
            <option value="educacao">Educação</option>
            <option value="saude">Saúde</option>
            <option value="meio-ambiente">Meio Ambiente</option>
          </select>
          <button type="submit" class="form-contact-button">Enviar</button>
        </form>
      </div>
    )
  }
}

export default FormONG;
