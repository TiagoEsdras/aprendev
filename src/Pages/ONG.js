import { Component } from 'react';
import Footer from '../Components/Footer';
import FormONG from '../Components/FormONG';
import Header from '../Components/Header';

class ONG extends Component {
  render() {
    return (
      <div>
        <Header />
        <FormONG />
        <Footer />
      </div>
    )
  }
}

export default ONG;