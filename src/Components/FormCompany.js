import { Component } from 'react';

class FormCompany extends Component {
  render() {
    return (
      <div class="container">
        <div>
          <h1 class="title-form">Cadastre sua empresa</h1>
        </div>
        <form class="form-contact">
          <input
            type="text"
            class="form-contact-input"
            name="nome"
            placeholder="Nome da empresa"
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
            name="atucao"
            id="atuacao"
            class="form-contact-input"
          >
            <option hidden>Área de atuação</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="industria">Indústria</option>
            <option value="comercio">Comércio</option>
            <option value="outros">Outros</option>
          </select>
          <input
            type="number"
            class="form-contact-input"
            name="funcionarios"
            placeholder="N° de funcionários"
          />
          <p>Sua empresa já tem projeto de Jovem Aprendiz?</p>
          <input
            type="radio"
            id="sim"
            name="gender"
            value="sim"
          />
          <label for="sim">Sim</label>
          <input
            type="radio"
            id="nao"
            name="gender"
            value="nao"
          />
          <label for="nao">Não</label>
          <br />
          <br />
          <button type="submit" class="form-contact-button">Enviar</button>
        </form>
      </div>
    )
  }
}

export default FormCompany;
