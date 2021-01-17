import { Component } from 'react';

class FormStudent extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="nome">
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="NOME"
            />
          </label>
          <label htmlFor="idade">
            <input
              type="number"
              id="idade"
              name="idade"
              placeholder="IDADE"
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="EMAIL"
            />
          </label>
          <label htmlFor="cpf">
            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="CPF"
            />
          </label>
          <label>
            Escola
            <select>
              <option>Selecione...</option>
              <option>Escola1</option>
              <option>Escola1</option>
              <option>Escola1</option>
            </select>
          </label>
          <label>
            Raça
            <select>
              <option>Selecione...</option>
              <option>raça</option>
              <option>raça</option>
              <option>raça</option>
            </select>
          </label>
          <label htmlFor="renda">
            <input
              type="text"
              id="renda"
              name="renda"
              placeholder="RENDA FAMILIAR"
            />
          </label>
          <button
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    )
  }
}

export default FormStudent;
