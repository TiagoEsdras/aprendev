import { Component } from 'react';

class FormCompany extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="NOME DA EMPRESA"
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
          <label htmlFor="cnpj">
            <input
              type="text"
              id="cnpj"
              name="cnpj"
              placeholder="CNPJ"
            />
          </label>
          <label>
          <input
              type="text"
              id="numero-funcionarios"
              name="numero-funcionarios"
              placeholder="N° DE FUNCIONÁRIOS"
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

export default FormCompany;
