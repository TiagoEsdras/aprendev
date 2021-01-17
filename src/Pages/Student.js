import { Component } from 'react';
import Footer from '../Components/Footer';
import FormStudent from '../Components/FormStudent';
import Header from '../Components/Header';

class Student extends Component {
  render() {
    return (
      <div>
        <Header />
        <FormStudent />
        <Footer />
      </div>
    )
  }
}

export default Student;
