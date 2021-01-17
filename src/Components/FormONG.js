import { Component } from 'react';

class FormONG extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="NOME DA ONG"
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
          <label htmlFor="registro">
            <input
              type="text"
              id="registro"
              name="registro"
              placeholder="REGISTRO"
            />
          </label>
          <label>
            <input
              type="text"
              id="finalidade"
              name="finalidade"
              placeholder="FINALIDADE"
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

export default FormONG;
