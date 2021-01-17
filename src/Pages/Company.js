import { Component } from 'react';
import Footer from '../Components/Footer';
import FormCompany from '../Components/FormCompany';
import Header from '../Components/Header';

class Company extends Component {
  render() {
    return (
      <div>
        <Header />
        <FormCompany />
        <Footer />
      </div>
    )
  }
}

export default Company;